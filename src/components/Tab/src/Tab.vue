<template>
  <section class="z-tab-container">
    <div class="z-tab-title-wrapper" :style="[ ...tabsStyle ]" ref="nav">
      <div class="z-tab-title-main" ref="tabsWrapper">
        <div v-for="(item, index) in list" :key="index"
             class="z-tab-title-item"
             :class="{ 'z-tab-title-active': index === value }"
             @click="clickItem(index)" ref="tabs">
          <span class="title-cell" :style="[ index === value ? activeTextStyle : inactiveTintStyle ]">{{ item }}</span>
        </div>
      </div>
      <div class="z-tab-title-line"
           :style="[{ backgroundColor: `${lineBackGroundColor}`}, ...lineStyle]">
      </div>
    </div>
    <div class="z-tab-body-wrapper" ref="content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  import { raf } from '../../../utils/raf'

  /*
  * @params value               当前的tab索引
  * @params tabsStyle           tabs的样式
  * @params lineBackGroundColor 底部下滑线的颜色
  * @params activeTextStyle     激活的字体颜色
  * @params inactiveTintStyle   未激活的颜色
  * @params lock                是否开启左右滑动切换
  * */
  export default {
    name: 'zTab',
    props: {
      value: {
        type: Number,
        required: true
      },
      tabsStyle: {
        type: Object,
        default: () => {
          return {}
        }
      },
      lineBackGroundColor: {
        type: String,
        default: '#409EFF'
      },
      activeTextStyle: {
        type: Object,
        default: () => {
          return {
            color: '#409EFF'
          }
        }
      },
      inactiveTintStyle: {
        type: Object,
        default: () => {
          return {
            color: '#333'
          }
        }
      },
      lock: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        list: [],
        lineStyle: {}
      }
    },
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        this.setList();
        this.setStyle();
        this.handleTouch()
      },
      setStyle () {
        this.$nextTick(() => {
          this.setLineStyle(this.value);
          this.mathScrollX(this.value)
        })
      },
      setLineStyle(index) { // 写入下划线样式
        const tab = this.$refs.tabs[index];
        const width = tab.offsetWidth;
        const left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

        this.lineStyle = {
          width: `${width}px`,
          transform: `translateX(${left}px)`
        }
      },
      setList () { // 写入tabs
        this.$children.forEach((item, index) => {
          this.list.push(item.title)
        })
      },
      getActiveItem () { // 获取当前激活的tabItem
        this.$children.forEach((item, index) => {
          item.active = (index === this.value)
        });
      },
      clickItem (index) { // 点击tab
        this.onChange(index)
      },
      onChange(index) { // tab切换变化
        this.setLineStyle(index);
        this.mathScrollX(index);

        this.$emit('input', index);
        this.$emit('change', index)
      },
      mathScrollX (index) { // 获取滚动的距离
        const tab = this.$refs.tabs[index];
        const nav = this.$refs.nav;
        const { scrollLeft, offsetWidth: navWidth } = nav;
        const { offsetLeft, offsetWidth: tabWidth } = tab;

        this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2);
      },
      scrollTo(el, from, to) { // 执行滚动动画
        let count = 0;
        const frames = Math.round(0.2 * 1000 / 16);
        const animate = () => {
          el.scrollLeft += (to - from) / frames;

          if (++count < frames) {
            raf(animate);
          }
        };
        animate()
      },
      handleTouch() { // 滚动事件
        if (!this.lock) {
          return
        }

        const content = this.$refs.content;
        let index, startX, startY, endX, endY;

        content.addEventListener('touchstart', (e) => {
          e.preventDefault();

          index = this.value;
          startX = e.touches[0].pageX;
          startY = e.touches[0].pageY;
        });

        content.addEventListener('touchmove', (e) => {
          e.preventDefault();

          endX = e.touches[0].pageX;
          endY = e.touches[0].pageY;
        });

        content.addEventListener('touchend', (e) => {
          e.preventDefault();

          if (startX > endX) {
            if (index === this.list.length - 1) {
              return
            }

            this.clickItem(index + 1)
          } else {
            if (index === 0) {
              return
            }

            this.clickItem(index - 1)
          }
        })
      }
    },
    watch: {
      list () {
        this.getActiveItem()
      },
      value () {
        this.getActiveItem()
      }
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../../../assets/styles/components/tab.less";
</style>
