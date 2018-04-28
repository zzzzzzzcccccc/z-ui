import Tab from './src/Tab'
import TabItem from './src/Tab-item'

Tab.install = (Vue) => {
  Vue.component(Tab.name, Tab)
  Vue.component(TabItem.name, TabItem)
}

Tab.Item = TabItem

export default Tab
