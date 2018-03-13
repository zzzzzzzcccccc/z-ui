import {
  Bubble,
  Button,
  Icon,
  Toast,
  Scroll,
  Swipe,
  Alert,
  Popup,
  Spinner,
  Notice,
  Cell,
  Tag,
  TabBar,
  Collapse
} from './components'

const components = [
  Bubble,
  Button,
  Icon,
  Scroll,
  Swipe,
  Popup,
  Notice,
  Cell,
  Tag,
  TabBar,
  Collapse
]

const install = (Vue, opts={}) => {
  if(install.installed) {
    return
  }
  install.installed = true

  components.forEach((component) => {
    component.install(Vue)
  })

  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$Alert = Vue.prototype.$Alert = Alert
  Vue.$Spinner = Vue.prototype.$Spinner = Spinner
}

const zUI = {
  version: '1.0.0',
  install,
  Toast,
  Alert,
  Spinner,
  ...components
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default zUI
