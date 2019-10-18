import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import tongzhi from './components/tongzhi.vue'
import txiaoxi from './components/txiaoxi.vue'
import User from './views/User.vue'
// 广场组件引入
import HomeGc from './components/gc/HomeGc.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/User',component:User},
    {path:'/txiaoxi',component:txiaoxi},
    {path:'/tongzhi',component:tongzhi},
    {path:'/Login',component:Login},

    // 广场组件访问路径
    {path:'/HomeGc',component:HomeGc},
  ]
})
