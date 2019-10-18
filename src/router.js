import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import tongzhi from './components/tongzhi.vue'
import User from './views/User.vue'
import Agreement from './views/Agreement.vue'
import Sign from './views/Sign.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Sign',component:Sign},
    {path:'/Agreement',component:Agreement},
    {path:'/User',component:User},
    {path:'/tongzhi',component:tongzhi},
    {path:'/Login',component:Login},
  ]
})
