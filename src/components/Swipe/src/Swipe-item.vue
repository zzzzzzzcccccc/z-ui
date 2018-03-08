<template>
  <div class="z-swipe-item-container">
    <slot>
      <a :href="item.href ? item.href : 'javascript:void(0)'"><img :src="item.src" /></a>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'zSwipeItem',
    props: {
      item: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/swipe.less";
</style>
