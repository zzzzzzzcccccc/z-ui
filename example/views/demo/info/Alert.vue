<template>
  <z-scroll style="width: 92%;margin: 0 auto;height: 300px;">
    <div slot="list">
      <div style="margin: 10px auto">
        <z-button val="alert弹窗" @click="showAlert"></z-button>
      </div>
      <div style="margin: 10px auto">
        <z-button val="alert弹窗带Icon" @click="showAlertIcon"></z-button>
      </div>
      <div style="margin: 10px auto">
        <z-button val="二次确认弹窗" @click="showConfirm"></z-button>
      </div>
      <div style="margin: 10px auto">
        <z-button val="二次确认弹窗带Icon" @click="showConfirmIcon"></z-button>
      </div>
    </div>
  </z-scroll>
</template>

<script>
  import { Alert } from '../../../../src/components'

  export default {
    methods: {
      showAlert () {
        Alert({ message: '我是一个普通Alert' })
      },
      showAlertIcon () {
        Alert({ message: '我是一个带iconAlert',  iconName: 'success' })
      },
      showConfirm () {
        Alert({
          type: 'confirm',
          message: '确认提交吗?',
          callback: boolean => {
            console.log(boolean)
          }
        })
      },
      showConfirmIcon () {
        Alert({
          type: 'confirm',
          iconName: 'warning',
          message: '确认删除吗',
          callback: boolean => {
            console.log(boolean)
          }
        })
      }
    }
  }
</script>
