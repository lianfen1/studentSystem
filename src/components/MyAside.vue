<template>
  <div class="layout-aside-container">
    <!-- 左侧边栏列表 -->
    <ul class="user-select-none menu">
      <li class="menu-item">
        <router-link to="/home/users">用户管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/addUser" v-if="$store.state.flag">添加用户</router-link>
        <router-link to="/home/addUser" v-else>修改用户</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/searchUser">查询用户</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/orders">订单管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/settings">系统设置</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyAside'
}
</script>

<style lang="less" scoped>
.layout-aside-container {
  width: 250px;
  height: 100%;
  border-right: 1px solid #eaeaea;
}

.menu {
  list-style-type: none;
  padding: 0;
  .menu-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    &:hover {
      background-image: linear-gradient(to right, rgba(0, 185, 167, 0), #90f7ec, rgba(0, 185, 167, 0));
      cursor: pointer;
    }
    a {
      display: block;
      color: white!important;
      padding-left: 30px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

// 设置路由高亮效果
.router-link-active {
  background-image: linear-gradient(to right, rgba(0, 185, 167, 0), rgb(144, 247, 236), rgba(0, 185, 167, 0));
  box-sizing: border-box;
  position: relative;
  color: #42b983!important;
  // 伪元素实现路由高亮效果
  &::before {
    content: ' ';
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #42b983;
  }
}
</style>
