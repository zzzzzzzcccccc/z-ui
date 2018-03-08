<template>
  <div class="z-swipe-container" ref="swipeWrapper">
    <div class="z-swipe-list-wrapper" ref="swipeListWrapper">
      <slot>
        <swipe-item v-for="(item, index) in data" :key="index" @click="clickItem(item, index)" :item="item"></swipe-item>
      </slot>
    </div>
    <div class="z-swipe-dots-wrapper">
      <slot name="dots" :current="currentPageIndex" :dots="dots">
        <span class="z-swipe-dots-item" :class="{'z-swipe-active': currentPageIndex === index}" v-for="(item, index) in dots" :key="index"></span>
      </slot>
    </div>
  </div>
</template>

<script>
  import SwipeItem from './Swipe-item'
  import BScroll from 'better-scroll'

  const EVENT_CHANGE = 'change'
  const EVENT_SELECT = 'click'

  /*
  * @params data 插入数据
  * @params initialIndex 默认首个index
  * @params loop 是否循环
  * @params autoPlay 是否自动轮播
  * @params duration 播放间隔
  * @params threshold 滑动到多少切换(0, 1) 默认0.3
  * @params speed 动画切换的速度
  * @params verticalType 默认横向
  * */
  export default {
    name: 'zSwipe',
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      initialIndex: {
        type: Number,
        default: 0
      },
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      duration: {
        type: Number,
        default: 3000
      },
      threshold: {
        type: Number,
        default: 0.3
      },
      speed: {
        type: Number,
        default: 400
      },
      verticalType: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        dots: 0,
        currentPageIndex: this.initialIndex || 0
      }
    },
    created() {
      const needRefreshProps = ['data', 'loop', 'autoPlay', 'threshold', 'speed', 'allowVertical']
      needRefreshProps.forEach((key) => {
        this.$watch(key, () => {
          this.refresh()
        })
      })
    },
    watch: {
      initialIndex(newIndex) {
        if (newIndex !== this.currentPageIndex) {
          this.slide && this.slide.goToPage(newIndex)
        }
      }
    },
    methods: {
      clickItem(item, index) {
        this.$emit(EVENT_SELECT, item, index)
      },
      refresh() {
        this.slide && this.slide.destroy()
        clearTimeout(this._timer)
        this.$nextTick(() => {
          if (this.slide === null) {
            return
          }
          if (this.slide !== undefined) {
            this.currentPageIndex = 0
          }
          this.dots = 0
          this._setSlideWidth()
          this._initDots()
          this._initSlide()
          if (this.autoPlay) {
            this._play()
          }
        })
      },
      _refresh() {
        this._setSlideWidth(true)
        this.slide.refresh()
      },
      _setSlideWidth(isResize) {
        this.children = this.$refs.swipeListWrapper.children
        let width = 0
        let slideWidth = this.$refs.swipeWrapper.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          this.children[i].style.width = slideWidth + 'px'
          width += slideWidth
        }
        if (this.loop && !isResize) {
          width += 2 * slideWidth
        }
        this.$refs.swipeListWrapper.style.width = width + 'px'
      },
      _initSlide() {
        this.slide = new BScroll(this.$refs.swipeWrapper, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          bounce: false,
          eventPassthrough: this.verticalType ? 'vertical' : '',
          snap: {
            loop: this.loop,
            threshold: this.threshold,
            speed: this.speed
          },
          click: true,
          observeDOM: false
        })
        this.slide.goToPage(this.currentPageIndex, 0, 0)
        this.slide.on('scrollEnd', this._onScrollEnd)
        window.removeEventListener('touchend', this._touchEndEvent, false)
        this._touchEndEvent = () => {
          if (this.autoPlay) {
            this._play()
          }
        }
        window.addEventListener('touchend', this._touchEndEvent, false)
        this.slide.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this._timer)
          }
        })
      },
      _onScrollEnd() {
        let pageIndex = this.slide.getCurrentPage().pageX
        if (this.currentPageIndex !== pageIndex) {
          this.currentPageIndex = pageIndex
          this.$emit(EVENT_CHANGE, this.currentPageIndex)
        }
        if (this.autoPlay) {
          this._play()
        }
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _play() {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.slide.next()
        }, this.duration)
      },
      _deactivated() {
        clearTimeout(this._timer)
        clearTimeout(this._resizeTimer)
        window.removeEventListener('resize', this._resizeHandler)
        window.removeEventListener('touchend', this._touchEndEvent, false)
      },
      _resizeHandler() {
        if (!this.slide) {
          return
        }
        clearTimeout(this._resizeTimer)
        this._resizeTimer = setTimeout(() => {
          if (this.slide.isInTransition) {
            this._onScrollEnd()
          } else {
            if (this.autoPlay) {
              this._play()
            }
          }
          this._refresh()
        }, 60)
      }
    },
    mounted() {
      this.refresh()
      window.addEventListener('resize', this._resizeHandler)
    },
    activated() {
      if (this.autoPlay) {
        this._play()
      }
      window.addEventListener('resize', this._resizeHandler)
    },
    deactivated() {
      this._deactivated()
    },
    destroyed() {
      this._deactivated()
      if (this.slide) {
        this.slide.destroy()
        this.slide = null
      }
    },
    components: {
      SwipeItem
    }
  }
</script>
