//import 'core-js/stable'
import Vue from 'vue'
import App from './App_admin'
import router from './router_admin'
import CoreuiVue from '@coreui/vue'
//import { iconsSet as icons } from './assets/icons/icons.js'
//import store from './store_admin'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  //store,
  //icons,
  template: '<App/>',
  components: {
    App
  }
})