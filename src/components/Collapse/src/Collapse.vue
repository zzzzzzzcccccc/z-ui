<template>
  <div class="z-collapse-container">
    <slot></slot>
  </div>
</template>

<script>
  /*
  * @params accordion Boolean 是否启用手风情模式
  * @params defaultIndex Array 设置默认展开
  * */
  export default {
    name: 'zCollapse',
    props: {
      accordion: {
        type: Boolean,
        default: false
      },
      defaultIndex: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        item: []
      }
    },
    methods: {
      getActiveItem () {
        this.defaultIndex.forEach((index) => {
          this.item[index].active = true
        })
      }
    },
    watch: {
      item () {
        this.getActiveItem()
      },
      defaultIndex () {
        this.getActiveItem()
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/collapse.less";
</style>
