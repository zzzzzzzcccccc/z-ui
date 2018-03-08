import {
  Bubble,
  Button,
  Icon,
  Toast,
  Scroll,
  Swipe,
  Alert
} from './components'

const components = [
  Bubble,
  Button,
  Icon,
  Scroll,
  Swipe
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
}

const zUI = {
  version: '1.0.0',
  install,
  Toast,
  Alert,
  ...components
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default zUI
