// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import './assets/style/reset.css'

import {
  Icon,
  Scroll,
  Button,
  Swipe,
  Popup,
  Notice,
  Cell,
  Tag,
  TabBar,
  Collapse,
  Tab,
} from '../src/components'
Vue.use(Icon)
Vue.use(Scroll)
Vue.use(Button)
Vue.use(Swipe)
Vue.use(Popup)
Vue.use(Notice)
Vue.use(Cell)
Vue.use(Cell.Item)
Vue.use(Tag)
Vue.use(TabBar)
Vue.use(TabBar.Item)
Vue.use(Collapse)
Vue.use(Collapse.Item)
Vue.use(Tab)
Vue.use(Tab.Item)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
