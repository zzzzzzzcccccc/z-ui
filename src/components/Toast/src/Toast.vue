<template>
  <transition name="z-fade">
    <div class="z-toast" v-show="visible">
      <div class="z-toast-container">
        <slot name="header">
          <icon class="z-toast-header-wrapper" :name="type" v-if="type" />
        </slot>

        <div class="z-toast-body-wrapper" :class="type ? 'z-toast-message-pd' : ''" v-if="message">{{ message }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Icon from '../../../components/Icon'

  export default {
    name: 'zToast',
    components: {
      Icon
    },
    props: {
      message: [Number, String],
      type: String,
      duration: {
        type: Number,
        default: 3000
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
  @import "../../../assets/styles/components/toast.less";
</style>
