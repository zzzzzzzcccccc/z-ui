import TabBar from './src/Tabbar'
import TabBarItem from './src/Tabbar-item'

TabBar.install = (Vue) => {
  Vue.component(TabBar.name, TabBar)
  Vue.component(TabBarItem.name, TabBarItem)
}

TabBar.Item = TabBarItem

export default TabBar
