import Tag from './src/Tag'

Tag.install = (Vue) => {
  Vue.component(Tag.name, Tag)
}

export default Tag
