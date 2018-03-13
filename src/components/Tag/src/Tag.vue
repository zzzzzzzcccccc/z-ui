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
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/tag.less";
</style>
