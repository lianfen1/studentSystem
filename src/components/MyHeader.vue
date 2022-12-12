<template>
  <div class="box"> 
       <h2 class="header">学生后台管理系统</h2>
       <div class="login">
           <img src="../assets/头像.jpg">
           <h5>admin</h5>
       </div>
 </div>


</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.box{
  position: relative;
  .header{
      width: 100%;
      height: 80px;
      text-align: center;
      line-height: 80px;
      border-bottom:1px solid #eaeaea;;
      background-color: #28a745;
    }
    .login{
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      width: 150px;
      height: 100%;
      line-height: 80px;
      img{
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