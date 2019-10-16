import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import tongzhi from './components/tongzhi.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/User',component:User},
    {path:'/tongzhi',component:tongzhi},
    {path:'/Login',component:Login},
  ]
})
