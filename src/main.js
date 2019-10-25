import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:4000"
axios.defaults.withCredentials=true
Vue.prototype.axios = axios
//引入mint-ui
import MintUI from "mint-ui"
//引入vuex
import Vuex from "vuex"
//单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//将mint-ui注册vue实例
Vue.use(MintUI)
Vue.config.productionTip = false
//注册vuex实例
Vue.use(Vuex)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
