<template>
  <div class="item" style="width: 100vw; height: 100vh; background-color: #e5e5e5;">
    <z-tab-bar v-model="index1">
      <z-tab-bar-item v-for="(item, index) in data1" :key="index" :label="item.label" :iconName="item.iconName">
      </z-tab-bar-item>
    </z-tab-bar>

    <z-tab-bar v-model="index2" bottom="100px">
      <z-tab-bar-item v-for="(item, index) in data2" :key="index"
                      :label="item.label"
                      :iconName="item.iconName"
                      :point="item.point"
                      :info="item.info" @click="bindClick">
      </z-tab-bar-item>
    </z-tab-bar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        index1: 2,
        data1: [
          {label: '标签', iconName: 'user'},
          {label: '标签', iconName: 'user'},
          {label: '标签'},
          {iconName: 'user'}
        ],
        index2: 0,
        data2: [
          {label: '标签', iconName: 'alipay', point: true},
          {label: '标签', iconName: 'weixin', info: 100}
        ]
      }
    },
    methods: {
      bindClick (e) {
        console.log(e)
      }
    }
  }
</script>
