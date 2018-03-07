<template>
  <div class="wrapper">

    <div class="wrapper-container">
      <v-header class="wrapper-header"></v-header>
      <div class="wrapper-main">
        <v-slider class="wrapper-slider" :list="srcList" @handleClick="handleSliderClick" :activePath="src"></v-slider>
        <section class="list-container">
          <div class="list-container-main">
            <section class="list-doc">
              <iframe frameborder="0" :src="`http://${host}/#/doc-${src}`" style="width: 100%;height: 100%; padding: 20px;"></iframe>
            </section>
            <section class="list-window" :style="deviceTypeMap[deviceType]">
              <iframe :style="deviceTypeMap[deviceType]" frameborder="0" :src="`http://${host}/#/${src}`"></iframe>
            </section>
          </div>
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
        src: 'icon'
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

  .list-container-main{
    width: 100%;
    height: 100%;
    position: relative;
  }

  .list-doc{
    width: 100%;
    height: 100%;
    padding-right: 400px;
  }

  .list-window{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%) scale(1);
    box-sizing: content-box;
    border: 1px solid #333;
  }
</style>
