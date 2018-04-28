<template>
  <div class="item">
    <div>

      <z-tab v-model="index1">
        <z-tab-item v-for="(item, index) in list1" :key="index" :title="item.title">
          <div class="info" style="padding: 20px">
            内容{{ index + 1 }}
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
        index1: 2,
        list1: [
          {title: '选项1'},
          {title: '选项2'},
          {title: '选项3'},
          {title: '选项4'},
          {title: '选项5'},
          {title: '选项6'},
          {title: '选项7'},
          {title: '选项8'},
          {title: '选项9'}
        ]
      }
    },
    methods: {
    }
  }
</script>
