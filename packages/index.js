import {
  Button
} from './components'

const components = [
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
  install
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default zUI
