import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/MyLogin.vue'
import Home from '../components/MyHome.vue'
import users from '../views/Users.vue'
import addUser from '../views/AddUser.vue'
import searchUser from '../views/SearchUser.vue'
import Orders from '../views/Orders.vue'
import Setting from '../views/Setting.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/Login' },
        { path: '/Login', component: Login },
        {
            path: '/home',
            component: Home,
            redirect: '/home/users',
            children: [
                { path: 'users', component: users },
                { path: 'addUser', component: addUser },
                { path: 'searchUser', component: searchUser },
                { path: 'orders', component: Orders },
                { path: 'settings', component: Setting }
            ]
        }
    ]

})

export default router