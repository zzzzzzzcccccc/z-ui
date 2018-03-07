// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import './assets/style/reset.css'

import Icon from '../src/components/Icon'
import Scroll from '../src/components/Scroll'
import Button from '../src/components/Button'
Vue.use(Icon)
Vue.use(Scroll)
Vue.use(Button)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
