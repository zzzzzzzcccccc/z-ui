import Vue from 'vue'
import Router from 'vue-router'
import {
  Container,

  List,
  Scroll,
  Toast,
  Button
} from '../views'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Container},

    {path: '/list', component: List},
    {path: '/toast', component: Toast},
    {path: '/button', component: Button},
    {path: '/scroll', component: Scroll}
  ]
})
