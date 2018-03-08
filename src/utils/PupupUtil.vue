<template>
  <div class="z-popup-util-container" :style="{ zIndex: zIndex }" v-show="visible">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      zIndex: {
        type: Number,
        default: 2000
      }
    }
  }
</script>

<style lang="less">
  .z-popup-util-container{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.56);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
</style>
