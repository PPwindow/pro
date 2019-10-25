import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import tongzhi from './components/tongzhi.vue'
import txiaoxi from './components/txiaoxi.vue'
import tanchu from './components/tanchu.vue'
import shangchuantu from './components/shangchuantu.vue'
import caipu from './components/caipu.vue'
import User from './views/User.vue'
import userSet from './components/userSet.vue'
import Agreement from './views/Agreement.vue'
import Sign from './views/Sign.vue'
// 广场组件引入
import HomeGc from './components/gc/HomeGc.vue'
import Home from './views/Home.vue'
//引入注册组件
import SignIn from './views/SignIn.vue'
//主页
import Index from './components/zy/index.vue'
import Publishpictures from './components/Publishpictures.vue'
Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
<<<<<<< HEAD
=======
    {path:'/shangchuantu',component:shangchuantu},
>>>>>>> dev
    {path:'/caipu',component:caipu},
=======
    {path:'/Publishpictures',component:Publishpictures},
>>>>>>> ff5e5590ee4662653191aa5d69e35e90cb0da776
    {path:'/Index',component:Index},
    {path:'/SignIn',component:SignIn},
    {path:'/Home',component:Home},
    {path:'/',component:Home},
    {path:'/Sign',component:Sign},
    {path:'/Agreement',component:Agreement},
    {path:'/User',component:User},
    {path:'/userSet',component:userSet},
    {path:'/tanchu',component:tanchu},
    {path:'/txiaoxi',component:txiaoxi},
    {path:'/tongzhi',component:tongzhi},
    {path:'/Login',component:Login},
    
    // 广场组件访问路径
    {path:'/HomeGc',component:HomeGc},
  ]
})
