<template>
  <transition name="z-alert">
    <popup-util :visible="visible">
      <div class="z-alert-container" :style="{ top }">
        <div class="z-alert-header" v-if="!iconName">{{ title }}</div>
        <div class="z-alert-header z-alert-header-icon" v-else>
          <icon :name="iconName"></icon>
        </div>
        <div class="z-alert-body">
          <div class="z-alert-body-message" v-if="message" v-html="message"></div>
        </div>
        <div class="z-alert-footer">
          <slot name="btn">
            <span v-if="!(type === 'alert')" @click="handleBtnClick(false)" class="z-alert-btn">{{ cancelTxt }}</span>
            <span @click="handleBtnClick(true)" class="z-alert-btn z-alert-ok-btn" :class="{ 'z-alert-ok-btn-bl': !(type === 'alert') }">{{ okTxt }}</span>
          </slot>
        </div>
      </div>
    </popup-util>
  </transition>
</template>

<script>
  import PopupUtil from '../../../utils/PupupUtil'
  import Icon from '../../Icon'

  export default {
    name: 'zAlert',
    components: {
      PopupUtil,
      Icon
    },
    props: {
      type: {
        type: String,
        default: 'alert'
      },
      top: {
        type: String,
        default: '36%'
      },
      title: {
        type: [String, Number],
        default: '提示'
      },
      message: {
        type: [String, Number],
        default: ''
      },
      okTxt: {
        type: [String, Number],
        default: '确认'
      },
      cancelTxt: {
        type: [String, Number],
        default: '取消'
      },
      iconName: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        visible: false
      }
    },
    methods: {
      handleBtnClick (boolean) {
        this.visible = false
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/alert.less";
</style>
