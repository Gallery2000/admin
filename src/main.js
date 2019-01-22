import Vue from 'vue'
import App from './App.vue'
import 'normalize.css';
import Cookies from 'js-cookie'
import Element from 'element-ui'

import router from './router';
import store from './stroe'


Vue.config.productionTip = false
console.log(router);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
