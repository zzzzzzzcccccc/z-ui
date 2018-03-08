import Vue from 'vue'
import TemplateAlert from './src/Alert'

const constructorAlert = Vue.extend(TemplateAlert)

let instance

const DEFAULT = {
  type: 'alert',
  top: '36%',
  title: '提示',
  message: '',
  okTxt: '确认',
  cancelTxt: '取消',
  iconName: ''
}

const Alert = (options={}) => {
  if (!instance) {
    instance = new constructorAlert({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
  }
  // 插入配置如果传入就用传入否则使用默认
  for (const key in DEFAULT) {
    instance[key] = options[key] || DEFAULT[key]
  }

  Vue.nextTick(() => {
    instance.visible = true
    instance.handleBtnClick = (boolean) => {

      if (options.callback) options.callback(boolean)
      // 因为只会生成一个dom 反复调用会出现错乱所以关闭初始化一下
      for (const key in DEFAULT) {
        instance[key] = DEFAULT[key]
      }

      instance.visible = false
    }
  })
}

export default Alert
