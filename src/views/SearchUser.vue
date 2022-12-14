<template>
  <div>
<div class="input-group mb-3">
  <input type="text" v-model="searchKey" class="form-control" placeholder="请输入用户名或id" aria-label="Username" aria-describedby="basic-addon1">
  <div class="input-group-prepend">
    <button class="btn btn-primary" id="basic-addon1" @click="filterStu">搜索</button>
  </div>
</div>
      <table class="table  table-hover">
        <thead>
              <tr>
                <th scope="col">学号</th>
                <th scope="col">姓名</th>
                <th scope="col">专业</th>
                <th scope="col">地址</th>
                <th scope="col">操作</th>
              </tr>
        </thead>
        <tbody>
          <tr v-for="item in newStu" :key="item.stu_number">
            <th scope="row">{{item.stu_number}}</th>
            <td>{{item.stu_name}}</td>
            <td>{{item.stu_major}}</td>
            <td>{{item.stu_address}}</td>
            <td>
              <span @click="deleteStu(item.stu_number)"><a href="javascript:;" @click="($store.dispatch('mysqldel',item.stu_number))">删除</a>&nbsp;&nbsp;&nbsp;</span>
              <router-link to="/home/addUser"  @click="$store.commit('rewords',item.stu_number)">修改</router-link>
            </td>
          </tr>
        </tbody>
      </table>
</div>

</template>

<script>
import axios from 'axios';
export default {
    data(){
      return {
        studentList:[],
        newStu:[],
        searchKey:''
      }
    },
    methods:{
      filterStu(){
            axios.post('http://127.0.0.1/backstage/api_pagetotal.php').then(({ data }) => {
                  this.studentList=data
            })
            this.newStu=this.studentList.filter(item=>{
              this.newStu=[]
              return (item.stu_name.includes(this.searchKey))||(item.stu_number.includes(this.searchKey))
        })
      },
      deleteStu(id){
        this.newStu.forEach((item,i)=>{
          if((item.stu_number==id)||(item.stu_name==id)){
              this.newStu.splice(i,1)
          }
        })
      }
    }
   
}
</script>

<style>

</style>