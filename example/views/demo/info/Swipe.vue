<template>
  <div class="item">
    <div class="swipe-container" style="height: 200px;">
      <z-swipe :data="data1" @change="change"></z-swipe>
    </div>

    <div style="margin: 10px 0;"></div>

    <div class="swipe-container" style="height: 200px;">
      <z-swipe :data="data2">
        <z-swipe-item v-for="(item, index) in data2" :key="index" :item="item">
          <div>{{ item.value }}</div>
        </z-swipe-item>
      </z-swipe>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        data1: [
          {src: 'http://img5.imgtn.bdimg.com/it/u=1046983545,2051560208&fm=27&gp=0.jpg'},
          {src: 'http://img5.imgtn.bdimg.com/it/u=1046983545,2051560208&fm=27&gp=0.jpg'},
          {src: 'http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg'}
        ],
        data2: [
          {value: 'swipe1'},
          {value: 'swipe2'},
          {value: 'swipe3'},
          {value: 'swipe4'}
        ]
      }
    },
    methods: {
      change (val) {
        console.log(val)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/style/item.less";
</style>
