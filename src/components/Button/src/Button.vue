<template>
  <button class="z-button"
          :class="[`z-button-${type}`,
          `z-button-${size}`,
          {'z-button-disabled': disabled, 'z-button-round': round, 'z-button-loading': loading}, plain ? `z-button-${type}-plain` : '']"
          :disabled="disabled" @click="handleClick">
    <span class="z-button-icon" v-if="icon || $slots.icon || loading">
      <slot name="icon"><icon name="loading" /></slot>
    </span>
    <span class="z-button-label" v-if="val">{{ val }}</span>
  </button>
</template>

<script>
  /*
  * 按钮组件
  * @params val 按钮内容
  * @params type 按钮样式类型 primary success warning danger
  * @params size 按钮尺寸 normal large small mini
  * @params disabled 是否禁用
  * @params plain 按钮是否镂空
  * @params icon icon图标
  * */
  import Icon from '../../Icon'

  export default {
    name: 'zButton',
    components: {
      Icon
    },
    props: {
      val: {
        type: [String, Number],
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      size: {
        type: String,
        default: 'normal'
      },
      disabled: Boolean,
      plain: Boolean,
      round: Boolean,
      icon: String,
      loading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/button.less";
</style>
