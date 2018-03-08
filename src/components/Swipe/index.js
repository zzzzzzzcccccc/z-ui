import Swipe from './src/Swipe'
import SwipeItem from './src/Swipe-item'

Swipe.install = (Vue) => {
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
}

Swipe.Item = SwipeItem

export default Swipe
