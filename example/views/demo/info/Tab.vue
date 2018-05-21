<template>
  <div>

    <div style="padding: 10px 0">
      <h3>多列滚动</h3>
      <z-tab v-model="activeIndex1">
        <z-tab-item v-for="index in 12" :key="index" :title="`选项${index}`">
          <div style="height: 100px">
            内容{{ index }}
          </div>
        </z-tab-item>
      </z-tab>
    </div>

    <div style="padding: 10px 0">
      <h3>正常内容左右可滑动切换</h3>
      <z-tab v-model="activeIndex2">
        <z-tab-item v-for="index in 4" :key="index" :title="`选项${index}`">
          <div style="height: 100px">
            内容{{ index }}
          </div>
        </z-tab-item>
      </z-tab>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex1: 0,
        activeIndex2: 1
      }
    },
    methods: {
    }
  }
</script>
