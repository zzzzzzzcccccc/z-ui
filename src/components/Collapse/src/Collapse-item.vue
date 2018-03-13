<template>
  <div class="z-collapse-item-container" :class="[{'z-collapse-active': active}]">
    <div class="z-collapse-item-header" @click="bindClick" :class="[{'z-collapse-disabled': disabled}]">
      <slot name="header">
        <span class="z-collapse-header-info">{{ title }}</span>
        <icon class="z-collapse-header-icon" name="arrowRight" />
      </slot>
    </div>
    <collapse-transition>
      <div class="z-collapse-item-content" v-show="active">
        <div class="z-collapse-item-content-main">
          <slot></slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
  import CollapseTransition from '../../../utils/CollapseTransition'
  import Icon from '../../Icon'

  /*
  * @params title String/Number 说明
  * @params disabled Boolean 是否被禁用
  * @slot header 若需要自定义标题
  * */
  export default {
    name: 'zCollapseItem',
    components: {
      CollapseTransition,
      Icon
    },
    props: {
      title: {
        type: [String, Number],
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
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
        const accordion = this.$parent.accordion

        if (accordion) this.setAccordion()
        else this.active ? this.active = false : this.active = true

        this.$emit('click', e)
      },
      setAccordion () {
        const item = this.$parent.item

        if (this.active) {
          for (let i = 0; i < item.length; i++) {
            item[i].active = false
          }
        } else {
          for (let i = 0; i < item.length; i++) {
            item[i].active = false
          }
          this.active = true
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/collapse-item.less";
</style>
