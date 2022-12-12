import { createStore } from 'vuex'
import axios from 'axios'
import qs from 'qs'

let store = createStore({
    state() {
        return {
            studentList: [],
            stu_number: '',
            stu_name: '',
            stu_major: '',
            stu_address: '',
            flag: true,
            pageNow: 1,
            pageSize: 4,
            pageTotal: 0,
            pageCount: 0
        }
    },
    mutations: {
        upd_stu_name(state, stu_name) {
            state.stu_name = stu_name
        },
        upd_stu_major(state, stu_major) {
            state.stu_major = stu_major
        },
        upd_stu_address(state, stu_address) {
            state.stu_address = stu_address
        },
        upd_stu_number(state, stu_number) {
            state.stu_number = stu_number
        },
        initList(state, data) {
            state.studentList = data
        },
        addStudent(state) {
            if (state.stu_number == "" && state.stu_name == "" && state.stu_major == "" && state.stu_address == "") {
                return alert('请输入姓名或学或学号或专业')
            }
            let obj = { stu_number: state.stu_number, stu_name: state.stu_name, stu_major: state.stu_major, stu_address: state.stu_address }
            state.studentList.push(obj)
            state.stu_number = ''
            state.stu_name = ''
            state.stu_major = ''
            state.stu_address = ''
        },
        del(state, id) {
            state.studentList.filter((item, i) => {
                if (item.stu_number == id) {
                    return state.studentList.splice(i, 1)
                }
            })
        },
        rewords(state, stu_number) {
            state.studentList.filter(item => {
                if (item.stu_number == stu_number) {
                    state.stu_number = item.stu_number
                    state.stu_name = item.stu_name
                    state.stu_major = item.stu_major
                    state.stu_address = item.stu_address
                }
                state.flag = false
                return
            })
        },
        update(state, stu_number) {
            console.log(11);
            state.studentList.filter(item => {
                if (item.stu_number == stu_number) {
                    item.stu_number = state.stu_number
                    item.stu_name = state.stu_name
                    item.stu_major = state.stu_major
                    item.stu_address = state.stu_address
                }
            })
            state.flag = true
            state.stu_number = ''
            state.stu_name = ''
            state.stu_major = ''
            state.stu_address = ''
        }
    },
    actions: {
        // 查询数据库函数
        getList(context) {
            axios.post('http://localhost/vueUser/backstage/api_getstu.php', qs.stringify({
                pageSize: this.state.pageSize,
                pageNow: this.state.pageNow
            })).then(({ data }) => {
                context.commit('initList', data)
            })
        },
        // 添加数据库函数
        mysqladd(context) {
            if (this.state.stu_number == "" && this.state.stu_name == "" && this.state.stu_major == "" && this.state.stu_address == "") {
                return alert('请输入姓名或学或学号或专业')
            }
            axios.post('http://localhost/vueUser/backstage/api_add.php', qs.stringify({
                stu_name: this.state.stu_name,
                stu_number: this.state.stu_number,
                stu_major: this.state.stu_major,
                stu_address: this.state.stu_address
            })).then(
                ({ data }) => {
                    if (data.trim() == 'yes') {
                        alert('添加成功', data)
                        this.state.stu_number = ''
                        this.state.stu_name = ''
                        this.state.stu_major = ''
                        this.state.stu_address = ''
                        context.dispatch('getList')
                        context.dispatch('load')

                    } else {
                        alert('添加失败')
                    }
                }, res => {
                    console.log(res);
                })

        },
        // 删除数据库函数
        mysqldel(context, stu_number) {
            axios.delete('http://127.0.0.1/vueUser/backstage/api_del.php', { params: { stu_number: stu_number } }).then(({ data }) => {
                if (data.trim() == 'yes') {
                    alert('删除成功')
                    context.commit('del', stu_number)
                    context.dispatch('load')
                } else {
                    alert('删除失败')
                }
            })
        },
        // 修改数据库函数
        mysqludp(context, stu_number) {
            axios.post('http://localhost/vueUser/backstage/api_upd.php', qs.stringify({
                stu_name: this.state.stu_name,
                stu_number: this.state.stu_number,
                stu_major: this.state.stu_major,
                stu_address: this.state.stu_address
            })).then(({ data }) => {
                if (data.trim() == 'yes') {
                    alert('修改成功')
                    context.commit('update', stu_number)
                } else {
                    alert('修改失败')
                }
            }).catch(error => {
                console.log(error);
            })
        },
        // 请求分页查询数据
        load(context) {
            axios.post('http://127.0.0.1/vueUser/backstage/api_pagetotal.php').then(({ data }) => {
                this.state.pageTotal = data.length
                this.state.pageCount = Math.ceil(data.length / this.state.pageSize)
            })
        }
    }
})
export default store