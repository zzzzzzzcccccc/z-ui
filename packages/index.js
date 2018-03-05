import {
  Icon,
  Scroll,
  Bubble,
  Button
} from './components'

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
}

const zUI = {
  version: '1.0.0',
  install,
  Icon,
  Scroll,
  Bubble,
  Button
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default zUI
