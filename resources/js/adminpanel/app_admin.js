window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue'
import App from './App_admin'
import router from './router_admin'

import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from '../../icons/icons.js'

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)
Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  router,
  //store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})