<template>
  <div class="z-tab-bar-container" :style="{ backgroundColor, bottom }">
    <slot></slot>
  </div>
</template>

<script>

  /*
  * @params backgroundColor 背景色 默认白色
  * @params bottom 距离底部 默认0
  * @params v-model 当前索引
  * */
  export default {
    name: 'zTabBar',
    props: {
      backgroundColor: {
        type: String,
        default: '#fff'
      },
      bottom: {
        type: [String, Number],
        default: '0px'
      },
      value: Number
    },
    data () {
      return {
        item: []
      }
    },
    methods: {
      getActiveItem () {
        this.item.forEach((item, index) => {
          item.active = (index === this.value)
        })
      },
      onChange (active) {
        this.$emit('input', active)
        this.$emit('change', active)
      }
    },
    watch: {
      item () {
        this.getActiveItem()
      },
      value () {
        this.getActiveItem()
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/tabbar.less";
</style>
