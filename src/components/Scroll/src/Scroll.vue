<template>
  <div ref="scrollWrapper" class="z-scroll-wrapper">
    <div class="z-scroll-content">
      <div ref="listWrapper" class="z-scroll-list-wrapper">
        <slot name="list">
          <ul class="z-scroll-list">
            <li @click="clickItem(item)" class="z-scroll-list-item" v-for="item in data">{{item}}</li>
          </ul>
        </slot>
      </div>
      <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
        <div class="z-pullup-wrapper" v-if="pullUpLoad">
          <div class="z-before-trigger" v-if="!isPullUpLoad">
            <span>{{ pullUpTxt }}</span>
          </div>
          <div class="z-after-trigger" v-else>
            <icon name="loading" />
          </div>
        </div>
      </slot>
    </div>
    <slot
       name="pulldown"
      :pullDownRefresh="pullDownRefresh"
      :pullDownStyle="pullDownStyle"
      :beforePullDown="beforePullDown"
      :isPullingDown="isPullingDown"
      :bubbleY="bubbleY">
      <div class="z-pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
        <div class="z-before-trigger" v-if="beforePullDown">
          <bubble :y="bubbleY"></bubble>
        </div>
        <div class="z-after-trigger" v-else>
          <div v-if="isPullingDown" class="z-scroll-loading">
            <icon name="loading" />
          </div>
          <div v-else><span>{{ refreshTxt }}</span></div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Bubble from '../../Bubble'
  import Icon from '../../Icon'
  import { getRect } from './public'

  const DIRECTION_H = 'horizontal'
  const DIRECTION_V = 'vertical'
  const DEFAULT_REFRESH_TXT = 'Refresh success'
  const EVENT_SCROLL = 'scroll'
  const EVENT_BEFORE_SCROLL_START = 'before-scroll-start'
  const EVENT_CLICK = 'click'
  const EVENT_PULLING_DOWN = 'pulling-down'
  const EVENT_PULLING_UP = 'pulling-up'

  const DEFAULT_OPTIONS = {
    observeDOM: true,
    click: true,
    probeType: 1,
    scrollbar: false,
    pullDownRefresh: false,
    pullUpLoad: false
  }

  export default {
    name: 'zScroll',
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      options: {
        type: Object,
        default() {
          return {}
        }
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      listenBeforeScroll: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: DIRECTION_V
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      listRef: {
        type: String,
        default: 'list'
      }
    },
    data() {
      return {
        beforePullDown: true,
        isPullingDown: false,
        isPullUpLoad: false,
        pullUpDirty: true,
        bubbleY: 0,
        pullDownStyle: ''
      }
    },
    computed: {
      pullUpLoad() {
        return this.options.pullUpLoad
      },
      pullDownRefresh() {
        return this.options.pullDownRefresh
      },
      pullUpTxt() {
        const pullUpLoad = this.pullUpLoad
        const txt = pullUpLoad && pullUpLoad.txt
        const moreTxt = txt && txt.more || ''
        const noMoreTxt = txt && txt.noMore || ''
        return this.pullUpDirty ? moreTxt : noMoreTxt
      },
      refreshTxt() {
        const pullDownRefresh = this.pullDownRefresh
        return pullDownRefresh && pullDownRefresh.txt || DEFAULT_REFRESH_TXT
      }
    },
    created() {
      this.pullDownInitTop = -50
      this.$nextTick(() => {
        this.initScroll()
      })
    },
    methods: {
      initScroll() {
        if (!this.$refs.scrollWrapper) {
          return
        }
        this._calculateMinHeight()
        let options = Object.assign({}, DEFAULT_OPTIONS, {
          scrollY: this.direction === DIRECTION_V,
          scrollX: this.direction === DIRECTION_H
        }, this.options)
        this.scroll = new BScroll(this.$refs.scrollWrapper, options)
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit(EVENT_SCROLL, pos)
          })
        }
        if (this.listenBeforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit(EVENT_BEFORE_SCROLL_START)
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
        this._calculateMinHeight()
        this.scroll && this.scroll.refresh()
      },
      destroy() {
        this.scroll.destroy()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      clickItem(item) {
        this.$emit(EVENT_CLICK, item)
      },
      forceUpdate(dirty) {
        if (this.pullDownRefresh && this.isPullingDown) {
          this.isPullingDown = false
          this._reboundPullDown().then(() => {
            this._afterPullDown(dirty)
          })
        } else if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.pullUpDirty = dirty
          dirty && this.refresh()
        } else {
          dirty && this.refresh()
        }
      },
      _calculateMinHeight() {
        if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
          this.$refs.listWrapper.style.minHeight = `${getRect(this.$refs.scrollWrapper).height + 1}px`
        }
      },
      _initPullDownRefresh() {
        this.scroll.on('pullingDown', () => {
          this.beforePullDown = false
          this.isPullingDown = true
          this.$emit(EVENT_PULLING_DOWN)
        })
        this.scroll.on('scroll', (pos) => {
          if (this.beforePullDown) {
            this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
            this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
          } else {
            this.bubbleY = 0
            this.pullDownStyle = `top:${Math.min(pos.y - 30, 10)}px`
          }
        })
      },
      _initPullUpLoad() {
        this.scroll.on('pullingUp', () => {
          this.isPullUpLoad = true
          this.$emit(EVENT_PULLING_UP)
        })
      },
      _reboundPullDown() {
        const {stopTime = 600} = this.pullDownRefresh
        return new Promise((resolve) => {
          setTimeout(() => {
            this.scroll.finishPullDown()
            this.isPullingDown = false
            resolve()
          }, stopTime)
        })
      },
      _afterPullDown(dirty) {
        setTimeout(() => {
          this.pullDownStyle = `top:${this.pullDownInitTop}px`
          this.beforePullDown = true
          dirty && this.refresh()
        }, this.scroll.options.bounceTime)
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.forceUpdate(true)
        }, this.refreshDelay)
      }
    },
    components: {
      Bubble,
      Icon
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/components/scroll.less";
</style>
