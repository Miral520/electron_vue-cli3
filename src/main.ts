import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './../flexible.js'
import publicFn from './public'

import { Scrollbar } from 'element-ui';
Vue.use(Scrollbar);

Vue.prototype.$publicFn = publicFn;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
