import Vue from 'vue'
import Router from 'vue-router'
import {
  Container,

  List,
  Icon,
  Scroll,
  Toast,
  Button,
  Swipe,
  Alert,
  Popup,
  Spinner,
  Notice,
  Cell,
  Tag,
  TabBar,
  Collapse,

  docIcon,
  docScroll,
  docToast,
  docButton,
  docSwipe,
  docAlert,
  docPopup,
  docSpinner,
  docNotice,
  docCell,
  docTag,
  docTabBar,
  docCollapse,
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
    {path: '/swipe', component: Swipe},
    {path: '/alert', component: Alert},
    {path: '/popup', component: Popup},
    {path: '/spinner', component: Spinner},
    {path: '/notice', component: Notice},
    {path: '/cell', component: Cell},
    {path: '/tag', component: Tag},
    {path: '/tabbar', component: TabBar},
    {path: '/collapse', component: Collapse},

    {path: '/doc-icon', component: docIcon},
    {path: '/doc-toast', component: docToast},
    {path: '/doc-button', component: docButton},
    {path: '/doc-scroll', component: docScroll},
    {path: '/doc-swipe', component: docSwipe},
    {path: '/doc-alert', component: docAlert},
    {path: '/doc-popup', component: docPopup},
    {path: '/doc-spinner', component: docSpinner},
    {path: '/doc-notice', component: docNotice},
    {path: '/doc-cell', component: docCell},
    {path: '/doc-tag', component: docTag},
    {path: '/doc-tabbar', component: docTabBar},
    {path: '/doc-collapse', component: docCollapse}
  ]
})
