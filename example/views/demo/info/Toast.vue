<template>
  <div class="item">

    <div style="width: 92%;margin: 10px auto;">
      <z-button val="普通Toast" type="primary" @click="showToast"></z-button>
    </div>

    <div style="width: 92%;margin: 10px auto;">
      <z-button val="成功Toast" type="primary" @click="showTypeToast('success', '成功')"></z-button>
    </div>

    <div style="width: 92%;margin: 10px auto;">
      <z-button val="警告Toast" type="primary" @click="showTypeToast('warning', '警告')"></z-button>
    </div>

    <div style="width: 92%;margin: 10px auto;">
      <z-button val="报错Toast" type="primary" @click="showTypeToast('error', '错误')"></z-button>
    </div>

    <div style="width: 92%;margin: 10px auto;">
      <z-button val="success" type="primary" @click="showTypeToast('success')"></z-button>
    </div>

    <div style="width: 92%;margin: 10px auto;">
      <z-button val="loading" type="primary" @click="showTypeToast('loading')"></z-button>
    </div>

  </div>
</template>

<script>
  import { Toast } from '../../../../src/components'

  export default {
    methods: {
      showToast () {
        Toast('我是Toast')
      },
      showTypeToast (type, message) {
        Toast({type, message})
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/style/item.less";
</style>
