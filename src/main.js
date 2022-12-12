import { createApp } from 'vue'
import App from './App.vue'
import '../public/bootstrap4.6.2/css/bootstrap.min.css'
import router from './router'
import Vuex from './store'
const app = createApp(App)

app.use(router)
app.use(Vuex)
app.mount('#app')