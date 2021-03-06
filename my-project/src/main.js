// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import '../static/icon/iconfont.css'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://58.56.140.218:8001/api/';
Vue.prototype.$http = axios
import '../static/js/jquery.jqprint.js'
import '../static/js/jquery-migrate-1.2.1.min.js'
import $ from 'jquery'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
