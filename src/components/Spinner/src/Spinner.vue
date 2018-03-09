<template>
  <div class="z-spinner-container" v-show="visible">
    <div class="z-spinner-wrapper">
      <div class="z-spinner-header">
        <icon :name="iconName" />
      </div>
      <div class="z-spinner-body" v-if="message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
  import Icon from '../../Icon'

  export default {
    components: {
      Icon
    },
    props: {
      iconName: {
        type: String,
        default: 'loading'
      },
      message: {
        type: [String, Number],
        default: ''
      }
    },
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/spinner.less";
</style>
