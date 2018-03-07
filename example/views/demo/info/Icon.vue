<template>
  <div class="item">
    <z-scroll style="width: 92%; height: 100vh; margin: 0 auto;">
      <ul slot="list" style="display: flex; flex-wrap: wrap; justify-content: flex-start;">
        <li v-for="(item, index) in iconList" :key="index" style="width: 33.33333333%;text-align: center;">
          <div><z-icon :name="item.name" /></div>
          <div>{{ item.label }}</div>
        </li>
      </ul>
    </z-scroll>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        iconList: [
          {name: 'success', label: 'success'},
          {name: 'warning', label: 'warning'},
          {name: 'error', label: 'error'},
          {name: 'loading', label: 'loading'},
          {name: 'loadingPoint', label: 'loadingPoint'},
          {name: 'loadingLine', label: 'loadingLine'},
          {name: 'plus', label: 'plus'},
          {name: 'user', label: 'user'},
          {name: 'lock', label: 'lock'},
          {name: 'alipay', label: 'alipay'},
          {name: 'weixin', label: 'weixin'},
          {name: 'location', label: 'location'},
          {name: 'file', label: 'file'},
          {name: 'love', label: 'love'},
          {name: 'start', label: 'start'},
          {name: 'arrowRight', label: 'arrowRight'},
          {name: 'lineArrowRight', label: 'lineArrowRight'},
          {name: 'edit', label: 'edit'}
        ]
      }
    }
  }
</script>
