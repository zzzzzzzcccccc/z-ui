<template>
  <component :is="name" class="z-svg-icon" />
</template>

<script>
  import success from '../views/success'
  import warning from '../views/warning'
  import error from '../views/error'
  import loading from '../views/loading'
  import loadingPoint from '../views/loading-point'
  import loadingLine from '../views/loading-line'
  import plus from '../views/plus'
  import user from '../views/user'
  import lock from '../views/lock'
  import alipay from '../views/alipay'
  import weixin from '../views/weixin'
  import location from '../views/location'
  import file from '../views/file'
  import love from '../views/love'
  import start from '../views/start'
  import arrowRight from '../views/arrow-right'
  import lineArrowRight from '../views/line-arrow-right'
  import edit from '../views/edit'

  export default {
    name: 'zIcon',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    components: {
      success,
      warning,
      error,
      loading,
      loadingPoint,
      loadingLine,
      plus,
      user,
      lock,
      alipay,
      weixin,
      location,
      file,
      love,
      start,
      arrowRight,
      lineArrowRight,
      edit
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/utils/animate.less";

  .z-icon-loading{
    animation: global-rotate 1.2s infinite linear;
  }
</style>
