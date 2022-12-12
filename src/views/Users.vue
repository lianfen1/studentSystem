<template>
  <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">序号</th>
            <th scope="col">学号</th>
            <th scope="col">姓名</th>
            
            <th scope="col">专业</th>
            <th scope="col">地址</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in studentList" :key="item.stu_number">
            <th>{{(item.id)}}</th>
            <th scope="row">{{item.stu_number}}</th>
            <td>{{item.stu_name}}</td>
            <td>{{item.stu_major}}</td>
            <td>{{item.stu_address}}</td>
            <td>
              <a href="javascript:;" @click="($store.dispatch('mysqldel',item.stu_number))">删除</a>&nbsp;&nbsp;&nbsp;
              <router-link to="/home/addUser"  @click="$store.commit('rewords',item.stu_number)">修改</router-link>

            </td>
          </tr>
        </tbody>
</table>
<div class="navb">
  <nav aria-label="Page navigation example">
  <ul class="pagination offset-4">
    <li class="page-item" @click="preCurrentPage">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="item in pages" :key="item.index" @click="CurrentPage(item)" :class="($store.state.pageNow==item?'page-item active':'page-item')+(item=='...'?' disabled':'')">
      <a class="page-link" href="#">{{item}}</a>
    </li>
    <li class="page-item" @click="nextCurrentPage">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
</div>


</template>

<script>
import { mapState } from 'vuex';

export default {
  methods:{
    CurrentPage(id){
      if(id=='...') return 
      this.$store.state.pageNow=id
      this.$store.dispatch('getList')
    },
    preCurrentPage(){
      if(this.$store.state.pageNow>1){
        --this.$store.state.pageNow
        this.$store.dispatch('getList')
      }
    },
    nextCurrentPage(){
      if(this.$store.state.pageNow<this.$store.state.pageCount){
        ++this.$store.state.pageNow
      this.$store.dispatch('getList')
      }
    }
  },
   created(){
    this.$store.dispatch('getList')

  },
  computed:{
    ...mapState(['studentList']),
    pages(){
      let {pageCount,pageNow}=this.$store.state
      if(pageCount<=7) return pageCount
      if(pageNow<=6){
        return [1,2,3,4,5,6,7,'...',pageCount]
      }else if(pageNow>=pageCount-6){
        return [1,'...',pageNow-1,pageCount-6,pageCount-5,pageCount-4,pageCount-3,pageCount-2,pageCount-1,pageCount]
      }else{
        return [1,'...',pageNow-2,pageNow-1,pageNow,pageNow+1,pageNow+2,'...',pageCount]
      }
    }
  }
}
</script>

<style scoped>
</style>