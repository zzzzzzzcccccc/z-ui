import Cell from './src/Cell'
import CellItem from './src/Cell-item'

Cell.install = (Vue) => {
  Vue.component(Cell.name, Cell)
  Vue.component(CellItem.name, CellItem)
}

Cell.Item = CellItem

export default Cell
