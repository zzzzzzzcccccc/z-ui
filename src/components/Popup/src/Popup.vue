<template>
  <div class="z-popup-container">
    <popup-util :visible="visible" @click="setVisible(false)"></popup-util>

    <transition :name="isAnimateName">
      <div class="z-popup-wrapper" :class="[`z-popup-${position}`, screen ? `z-popup-${position}-screen` : '']" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import PopupUtil from '../../../utils/PupupUtil'

  export default {
    name: 'zPopup',
    components: {
      PopupUtil
    },
    props: {
      syncVisible: {
        type: Boolean,
        default: false
      },
      animateName: {
        type: String,
        default: 'slide'
      },
      position: {
        type: String,
        default: 'bottom'
      },
      screen: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {
        visible: false,
        isAnimateName: this.animateName
      }
    },
    beforeMount () {
      this.isAnimateName = `z-popup-${this.animateName}-${this.position}`
    },
    created () {
      if (this.syncVisible) {
        this.visible = true
      }
    },
    methods: {
      setVisible (val) {
        this.visible = false
      }
    },
    watch: {
      visible (val) {
        this.$emit('update:syncVisible', val)
      },
      syncVisible (val) {
        this.visible = val
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/popup.less";
</style>
