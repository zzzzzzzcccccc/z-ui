<template>
  <div class="z-notice-container" v-show="visible" :style="{ backgroundColor, color }" @click="bindClick">
    <!--左侧-->
    <div class="z-notice-left-wrapper" v-if="showNotice">
      <slot name="left">
        <icon name="notice" />
      </slot>
    </div>
    <!--内容-->
    <div class="z-notice-main" ref="messageWrapper">
      <div class="z-notice-main-info"
           :class="messageClassName"
           :style="messageStyle"
           ref="message"
           @animationend="onAnimationEnd"
           @webkitAnimationEnd="onAnimationEnd">
        <slot></slot>
      </div>
    </div>
    <!--右侧-->
    <div class="z-notice-right-wrapper" v-if="showClose" @click="bindClose">
      <slot name="right">
        <icon name="error" />
      </slot>
    </div>
  </div>
</template>

<script>
  import Icon from '../../Icon'
  /*
  * @params color String 字体颜色
  * @params backgroundColor String 背景色
  * @params isScroll Boolean 是否滚动
  * @params speed Number 滚动速度
  * @params delay Number 滚动间隔
  * @params showNotice Boolean 是否显示左侧
  * @params showClose Boolean 是否显示右侧
  * */
  export default {
    name: 'zNotice',
    components: {
      Icon
    },
    props: {
      color: {
        type: String,
        default: 'rgb(255, 102, 0)'
      },
      backgroundColor: {
        type: String,
        default: 'rgb(255, 247, 204)'
      },
      isScroll: {
        type: Boolean,
        default: true
      },
      speed: {
        type: Number,
        default: 50
      },
      delay: {
        type: [String, Number],
        default: 1
      },
      showNotice: {
        type: Boolean,
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        visible: true,
        wrapWidth: 0,
        messageWith: 0,
        duration: 0,
        messageClassName: '',
        firstPlay: true
      }
    },
    computed: {
      messageStyle () {
        return {
          paddingLeft: this.firstPlay ? 0 : this.wrapWidth + 'px',
          animationDelay: (this.firstPlay ? this.delay : 0) + 's',
          animationDuration: this.duration + 's'
        }
      }
    },
    mounted () {
      this.initAnimate()
    },
    methods: {
      setVisible (val) {
        this.visible = val
      },
      initAnimate () {
        this.messageWidth = this.$refs.message.getBoundingClientRect().width
        this.wrapWidth = this.$refs.messageWrapper.getBoundingClientRect().width

        if (this.isScroll && this.messageWidth > this.wrapWidth) {
          this.duration = this.messageWidth / this.speed
          this.messageClassName = 'z-notice-animate-play'
        }
      },
      onAnimationEnd () {
        this.firstPlay = false
        this.$nextTick(() => {
          this.duration = (this.wrapWidth + this.messageWidth) / this.speed
          this.messageClassName = 'z-notice-animate-infinite'
        })
      },
      bindClick (e) {
        this.$emit('click', e)
      },
      bindClose () {
        if (!this.$slots.right) {
          this.setVisible(false)
          this.$emit('handleClose')
        }
      }
    },
    watch: {
      visible (val) {
        this.$emit('change', val)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/notice.less";
</style>
