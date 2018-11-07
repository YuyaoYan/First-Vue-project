// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
// import ElementUI from 'ifbp-element'
import ElementUI from 'element-ui';
// import locale from 'ifbp-element/lib/locale/lang/en'
import 'ifbp-element/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource';
import axios from 'axios'
import Mock from './mock'

require('./mock.js');

Vue.use(Mock);
Vue.use(VueResource);
Vue.use(ElementUI,{
  size: 'small', 
  zIndex: 3000 
})
Vue.config.productionTip = false

axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
