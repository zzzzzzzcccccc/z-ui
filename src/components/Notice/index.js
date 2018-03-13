import Notice from './src/Notice'

Notice.install = (Vue) => {
  Vue.component(Notice.name, Notice)
}

export default Notice
