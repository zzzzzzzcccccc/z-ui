<template>
  <div class="z-cell-item-container" :class="{ 'z-cell-disabled': disabled }" @click="bindClick">

    <div class="z-cell-item-title" v-if="title || $slots.leftIcon || iconName || $slots.name">
      <div class="z-cell-item-title-top">
        <slot name="leftIcon">
          <icon :name="iconName" />
        </slot>

        <slot name="title">
          <span class="z-cell-item-title-info">{{ title }}</span>
        </slot>
      </div>
      <span class="z-cell-item-title-bottom" v-if="message" v-html="message"></span>
    </div>

    <div class="z-cell-item-label">
      <slot name="label" v-if="label">
        <span class="z-cell-item-label-info">{{ label }}</span>
      </slot>

      <slot name="rightIcon">
        <icon name="arrowRight" />
      </slot>
    </div>
  </div>
</template>

<script>
  import Icon from '../../Icon'

  /*
  * @params title String 左侧标题
  * @params label String 右侧内容
  * @params iconName String 对应icon组件name
  * @params message String 标题下面的描述
  * @params disabled Boolean 是否禁用
  * @slot leftIcon 左侧icon 标签
  * @slot name 左侧标题 标签
  * @slot rightIcon 右侧icon 标签
  * @slot label 右侧内容 标签
  * */
  export default {
    name: 'zCellItem',
    components: {
      Icon
    },
    props: {
      title: {
        type: [String, Number],
        default: ''
      },
      label: {
        type: [String, Number],
        default: ''
      },
      iconName: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      bindClick (e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/cell-item.less";
</style>
