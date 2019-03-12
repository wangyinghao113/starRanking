import '@/assets/css/app.scss';
import '@/assets/js/init.js'

import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App'
//路由模块
import router from './router'
//api模块
import api from './api'
//公共方法模块
import utils from './assets/js/utils.js'
import $ from 'jquery'

Vue.prototype.bus = new Vue;
Vue.use(Vuex)
Vue.prototype.$api = api; 
Vue.prototype.$utils = utils; 
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
