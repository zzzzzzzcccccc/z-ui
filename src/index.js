import Icon from './components/Icon'
import Scroll from './components/Scroll'
import Bubble from './components/Bubble'
import Button from './components/Button'
import Toast from './components/Toast'

const components = [
  Icon,
  Scroll,
  Bubble,
  Button
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
  ...components
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default zUI
