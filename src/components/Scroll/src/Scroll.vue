<template>
  <div ref="scrollWrapper" class="z-scroll-container">

    <div class="z-scroll-content">
      <div class="z-scroll-header-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
        <div class="before-trigger" v-if="beforePullDown">
          <bubble :y="bubbleY"></bubble>
        </div>
        <div class="after-trigger" v-else>
          <div v-if="isPullingDown" class="loading">
            <slot name="header"><icon name="loading" />加载中...</slot>
          </div>
          <div v-else>
            <slot name="refresh" v-if="$slots.refresh || refreshTxt"><span>{{ refreshTxt }}</span></slot>
          </div>
        </div>
      </div>

      <div ref="listWrapper" class="z-scroll-list-wrapper" v-if="$slots.list">
        <slot name="list"></slot>
      </div>

      <!--上啦展示-->
      <div class="z-scroll-footer-wrapper" v-if="pullUpLoad">
        <div class="z-scroll-footer-wrapper-info" v-if="isPullUpLoad">
          <slot name="footer"><icon name="loading" />加载中...</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { getRect } from './public'
  import Bubble from '../../Bubble'
  import Icon from '../../Icon'

  const COMPONENT_NAME = 'zScroll'
  const DIRECTION_H = 'horizontal'
  const DIRECTION_V = 'vertical'

  export default {
    name: COMPONENT_NAME,
    components: {
      Bubble,
      Icon
    },
    props: {
      data: { // 列表数据
        type: Array,
        default: function () {
          return []
        }
      },
      probeType: { // 1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
        type: Number,
        default: 1
      },
      bounce: { // 是否启用回弹动画效果
        type: Boolean,
        default: true
      },
      click: { // 是否开启点击列表事件
        type: Boolean,
        default: true
      },
      listenScroll: { // 是否监听滚动事件
        type: Boolean,
        default: false
      },
      listenBeforeScroll: { // 是否监听滚动开始事件
        type: Boolean,
        default: false
      },
      direction: { // 滚动方向 默认竖向
        type: String,
        default: DIRECTION_V
      },
      scrollbar: { // 是否显示滚动条
        type: null,
        default: false
      },
      pullDownRefresh: { // 是否开启下拉事件
        type: null,
        default: false
      },
      pullUpLoad: { // 是否开启上啦事件
        type: null,
        default: false
      },
      startY: { // 起始x轴方向
        type: Number,
        default: 0
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      freeScroll: { // 是否开启 竖向 横向滚动
        type: Boolean,
        default: false
      },
      mouseWheel: {
        type: Boolean,
        default: false
      },
      refreshTxt: {
        type: [Number, String],
        default: ''
      },
    },
    data() {
      return {
        beforePullDown: true,
        isRebounding: false,
        isPullingDown: false,
        isPullUpLoad: false,
        pullUpDirty: true,
        bubbleY: 0,
        pullDownStyle: `top:-50px`,
        pullDownInitTop: -50
      }
    },
    created() {
      this.$nextTick(() => {
        this.initScroll()
      })
    },
    methods: {
      initScroll() {
        if (!this.$refs.scrollWrapper) {
          return
        }
        if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
          this.$refs.listWrapper.style.minHeight = `${getRect(this.$refs.scrollWrapper).height + 1}px`
        }
        let options = {
          probeType: this.probeType,
          click: this.click,
          scrollY: this.freeScroll || this.direction === DIRECTION_V,
          scrollX: this.freeScroll || this.direction === DIRECTION_H,
          scrollbar: this.scrollbar,
          pullDownRefresh: this.pullDownRefresh,
          pullUpLoad: this.pullUpLoad,
          startY: this.startY,
          freeScroll: this.freeScroll,
          mouseWheel: this.mouseWheel,
          bounce: this.bounce
        }
        this.scroll = new BScroll(this.$refs.scrollWrapper, options)
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }
        if (this.listenBeforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScrollStart')
          })
        }
        if (this.pullDownRefresh) {
          this._initPullDownRefresh()
        }
        if (this.pullUpLoad) {
          this._initPullUpLoad()
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      clickItem(e, item) {
        this.$emit('click', item)
      },
      destroy() {
        this.scroll.destroy()
      },
      forceUpdate(dirty) {
        if (this.pullDownRefresh && this.isPullingDown) {
          this.isPullingDown = false
          this._reboundPullDown().then(() => {
            this._afterPullDown()
          })
        } else if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.pullUpDirty = dirty
          this.refresh()
        } else {
          this.refresh()
        }
      },
      _initPullDownRefresh() {
        this.scroll.on('pullingDown', () => {
          this.beforePullDown = false
          this.isPullingDown = true
          this.$emit('pullingDown')
        })
        this.scroll.on('scroll', (pos) => {
          if (this.beforePullDown) {
            this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
            this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, -10)}px`
          } else {
            this.bubbleY = 0
          }
          if (this.isRebounding) {
            this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
          }
        })
      },
      _initPullUpLoad() {
        this.scroll.on('pullingUp', () => {
          this.isPullUpLoad = true
          this.$emit('pullingUp')
        })
      },
      _reboundPullDown() {
        const {stopTime = 600} = this.pullDownRefresh
        return new Promise((resolve) => {
          setTimeout(() => {
            this.isRebounding = true
            this.scroll.finishPullDown()
            resolve()
          }, stopTime)
        })
      },
      _afterPullDown() {
        setTimeout(() => {
          this.pullDownStyle = `top:${this.pullDownInitTop}px`
          this.beforePullDown = true
          this.isRebounding = false
          this.refresh()
        }, this.scroll.options.bounceTime)
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.forceUpdate(true)
        }, this.refreshDelay)
      }
    }
  }
</script>

<style>
  @import "../../../assets/styles/components/scroll.less";
</style>


