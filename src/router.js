import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import tongzhi from './components/tongzhi.vue'
import User from './views/User.vue'
<<<<<<< HEAD
import Agreement from './views/Agreement.vue'
import Sign from './views/Sign.vue'
=======
// 广场组件引入
import HomeGc from './components/gc/HomeGc.vue'
>>>>>>> 24a47241a6d7a1e4982364d9f7a336d7bf339e9e

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Sign',component:Sign},
    {path:'/Agreement',component:Agreement},
    {path:'/User',component:User},
    {path:'/tongzhi',component:tongzhi},
    {path:'/Login',component:Login},

    // 广场组件访问路径
    {path:'/HomeGc',component:HomeGc},
  ]
})
