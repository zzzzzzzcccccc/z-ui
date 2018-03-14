<template>
  <div class="z-tab-bar-item-container" @click="bindClick" :class="[ {'z-tab-bar-active': active} ]" :style="{ height }">
    <div class="z-tab-bar-item-icon-wrapper" :class="[{'z-tab-bar-item-icon-point': point}]" v-if="iconName || $slots.icon">
      <slot name="icon">
        <icon class="z-tab-bar-icon-info" :name="iconName" />
      </slot>
      <em class="z-tab-bar-item-info" v-if="info">{{ typeof info === 'number' ? (info >= 99 ? '99+' : info) : info }}</em>
    </div>
    <div class="z-tab-bar-item-label-wrapper" v-if="label || $slots.label">
      <slot name="label">
        <span class="z-tab-bar-item-label-info">{{ label }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
  import Icon from '../../Icon'

  /*
  * @params label String 文案
  * @params iconName String 基于icon组件name
  * @params height Number/String tabbar 高度 默认42px
  * @params point Boolean 是否显示右上角红点
  * @params info Number/String 右上角显示文案
  * @slot icon icon标签
  * @slot label 文案标签
  * */
  export default {
    name: 'zTabBarItem',
    components: {
      Icon
    },
    props: {
      label: {
        type: [String, Number],
        default: ''
      },
      iconName: {
        type: String,
        default: ''
      },
      height: {
        type: [String, Number],
        default: '46px'
      },
      point: {
        type: Boolean,
        default: false
      },
      info: {
        type: [String, Number],
        default: ''
      }
    },
    data () {
      return {
        active: false
      }
    },
    beforeCreate () {
      this.$parent.item.push(this)
    },
    destroyed () {
      this.$parent.item.splice(this.$parent.item.indexOf(this), 1)
    },
    methods: {
      bindClick (e) {
        this.$parent.onChange(this.$parent.item.indexOf(this))
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/tabbar-item.less";
</style>
