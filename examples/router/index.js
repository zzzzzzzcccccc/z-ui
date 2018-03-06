import Vue from 'vue'
import Router from 'vue-router'
import {
  Container,

  List,
  Icon,
  Scroll,
  Toast,
  Button,

  docIcon,
  docScroll,
  docToast,
  docButton
} from '../views'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Container},

    {path: '/list', component: List},
    {path: '/icon', component: Icon},
    {path: '/toast', component: Toast},
    {path: '/button', component: Button},
    {path: '/scroll', component: Scroll},

    {path: '/doc-icon', component: docIcon},
    {path: '/doc-toast', component: docToast},
    {path: '/doc-button', component: docButton},
    {path: '/doc-scroll', component: docScroll}
  ]
})
