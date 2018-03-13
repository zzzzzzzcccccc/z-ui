<template>
  <span class="z-tag-container"
        :class="[`z-tag-${type}`, `z-tag-${size}`, { 'z-tag-disabled': disabled, 'z-tag-round': round, 'z-tag-link':isLink }, plain ? `z-tag-${type}-plain` : '']"
        @click="bindClick">
    <span class="z-tag-wrapper">
        <slot name="icon" v-if="iconName || $slots.icon">
          <icon class="z-tag-icon" :name="iconName" />
        </slot>
       <slot name="val" v-if="val || $slots.val">{{ val }}</slot>
    </span>
  </span>
</template>

<script>
  import Icon from '../../Icon'
  /*
  * @params type String 样式类型
  * @params val String 标签内容
  * @params size String 尺寸
  * @params iconName String 目前紧支持icon组件内的name
  * @params disabled Boolean 是否禁用
  * @params plain Boolean 是否镂空
  * @params round Boolean 是否显示圆角
  * @params isLink Boolean 是否可以被点击
  * @slot icon 标签
  * @slot val 标签
  * */
  export default {
    name: 'zTag',
    components: {
      Icon
    },
    props: {
      type: {
        type: String,
        default: 'info'
      },
      val: {
        type: [String, Number],
        default: ''
      },
      size: {
        type: String,
        default: 'normal'
      },
      iconName: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: true
      },
      isLink: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      bindClick (e) {
        if (this.isLink) {
          this.$emit('click', e)
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/tag.less";
</style>
