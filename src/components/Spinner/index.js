import Vue from 'vue'
import TemplateSpinner from './src/Spinner'

const constructorSpinner = Vue.extend(TemplateSpinner)

let instance

const DEFAULT = {
  iconName: 'loading',
  message: ''
}

export default {
  open (options={}) {
    if (!instance) {
      instance = new constructorSpinner({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
    }

    for (const key in DEFAULT) {
      instance[key] = options[key] || DEFAULT[key]
    }

    Vue.nextTick(() => {
      instance.visible = true
    })
  },
  close () {
    if (instance) instance.visible = false
  }
}
