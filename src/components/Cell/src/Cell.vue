<template>
  <div class="z-cell-container">
    <div class="z-cell-group-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import CellItem from './Cell-item'

  export default {
    name: 'zCell',
    components: {
      CellItem
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/cell.less";
</style>
