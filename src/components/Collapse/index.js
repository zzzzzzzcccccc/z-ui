import Collapse from './src/Collapse'
import CollapseItem from './src/Collapse-item'

Collapse.install = (Vue) => {
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapseItem.name, CollapseItem)
}

Collapse.Item = CollapseItem

export default Collapse
