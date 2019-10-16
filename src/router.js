import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import tongzhi from './components/tongzhi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/tongzhi',component:tongzhi},
    {path:'/Login',component:Login},
  ]
})
