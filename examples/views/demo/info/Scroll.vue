<template>
  <div class="item">
    <z-scroll class="item-scroll"
              :data="list"
              :listenScroll="true"
              @scroll="bindScroll"
              :pullDownRefresh="true"
              @pullingDown="pullingDown"
              :pullUpLoad="true"
              @pullingUp="pullingUp"
              ref="scroll">
      <ul slot="list">
        <li v-for="(item, index) in list" class="item-scroll-container">{{ item }}</li>
      </ul>
    </z-scroll>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        this.list = []
        for (let i = 0; i < 10; i++) {
          this.list.push(i)
        }
      },
      pullingUp () {
        setTimeout(() => {
          for (let i = 0; i < 5; i++) {
            this.list.push(this.list[this.list.length - 1] + 1)
          }
        }, 2000)
      },
      pullingDown () {
        setTimeout(() => {
          this.onReady()
        }, 2000)
      },
      bindScroll (item) {
        console.log(item)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../assets/style/item.less";
</style>
