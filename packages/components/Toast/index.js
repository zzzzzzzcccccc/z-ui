import Vue from 'vue'
import TemplateToast from './src/Toast'

const constructorToast = Vue.extend(TemplateToast)

let instance

const Toast = (options = {}) => {
  if (!instance) {
    instance = new constructorToast({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
  }

  Vue.nextTick(() => {
    const duration = options.duration || 3000

    instance.closed = false
    clearTimeout(instance.timer)

    instance.message = typeof options === 'string' ? options : options.message
    instance.type = options.type || ''
    instance.visible = true

    instance.timer = setTimeout(() => {
      if (instance.closed) return false
      instance.visible = false
      instance.closed = true
    }, duration)
  })

  return instance
}

export default Toast
