<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <MyHeader></MyHeader>
    <div class="home-main-box">
      <MyAside/>
      <div class="home-main-body">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <MyFooter/>
    </div>
    
  </div>
</template>

<script>
// 头部区域组件
import MyHeader from './MyHeader.vue'
// 左侧边栏组件
import MyAside from './MyAside.vue'
// 底部
import MyFooter from './Myfooter.vue'

export default {
  name: 'MyHome',
  // 注册组件
  components: {
    MyHeader,
    MyAside,
    MyFooter
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home-main-box {
    height: 100%;
    display: flex;
    
  }
  .home-main-body {
      height: 800px;
      padding: 15px;
      background-color: white;
      flex: 1;
    }
    .footer{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }
</style>
