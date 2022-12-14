<template>
  <div class="box"> 
        <div class="button" @click="onLoginOut">退出登录</div>
       <h2 class="header">学生后台管理系统</h2>
       <div class="login">
           <img src="../assets/头像.jpg">
           <h5>admin</h5>
       </div>
 </div>


</template>

<script>
export default {
   methods:{
    onLoginOut(){
      this.$router.push('/login')
    }
   }
}
</script>

<style lang="less" scoped>
.box{
  position: relative;
  .button{
    position: absolute;
    top: 0;
    right: 40px;
    line-height: 90px;
    cursor: pointer;
  }
  .header{
      width: 100%;
      height: 90px;
      text-align: center;
      line-height: 80px;
      // border-bottom:1px solid #eaeaea;
      background:linear-gradient(to right,#92FFC0);
    }
    .login{
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      top: 0;
      left: 30px;
      width: 150px;
      height: 100%;
      line-height: 80px;
      img{
        margin-top: -10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      h5{
        flex: 1;
        margin-left: 15px;
      }
    }
}
  
</style>