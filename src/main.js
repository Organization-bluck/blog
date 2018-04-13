import Vue from 'vue'
import Axios from 'axios'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import 'common/stylus/reset.styl'
import 'common/css/base.scss'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
