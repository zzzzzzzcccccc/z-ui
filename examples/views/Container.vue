<template>
  <div class="wrapper">

    <div class="wrapper-container">
      <v-header class="wrapper-header"></v-header>
      <div class="wrapper-main">
        <v-slider class="wrapper-slider" :list="srcList" @handleClick="handleSliderClick" :activePath="src"></v-slider>
        <section class="list-container">
          <section class="list-window" :style="deviceTypeMap[deviceType]">
            <iframe :style="deviceTypeMap[deviceType]" frameborder="0" :src="`http://${host}/#/${src}`"></iframe>
          </section>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
  import { VSlider, VHeader } from './common'
  import { srcList, deviceTypeMap } from '../utils/config'

  export default {
    components: {
      VSlider,
      VHeader
    },
    computed: {
      host: () => location.host,
      srcList: () => srcList,
      deviceTypeMap: () => deviceTypeMap
    },
    data () {
      return {
        deviceType: 'ip6',
        src: 'button'
      }
    },
    mounted () {
    },
    methods: {
      handleSliderClick ({ path }) {
        this.src = path
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper{
    width: 100%;
    height: 100%;
  }

  .wrapper-header{
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #333;
  }

  .wrapper-main{
    width: 100%;
    position: absolute;
    top: 56px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .wrapper-slider{
    width: 240px;
    border-right: 1px solid #333;
  }
  .list-container{
    flex: 1;
  }

  .list-window{
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    box-sizing: content-box;
    border: 1px solid #333;
  }
</style>
