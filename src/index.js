import {
  Bubble,
  Button,
  Icon,
  Toast,
  Scroll,
  Swipe,
  Alert,
  Popup,
  Spinner
} from './components'

const components = [
  Bubble,
  Button,
  Icon,
  Scroll,
  Swipe,
  Popup
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
