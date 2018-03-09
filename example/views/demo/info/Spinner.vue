<template>
  <div class="item">
    <z-scroll>
      <div slot="list">
        <div style="margin: 10px auto; width: 92%;">
          <z-button val="显示Spinner" @click="showSpinner"></z-button>
        </div>

        <div style="margin: 10px auto; width: 92%;">
          <z-button val="显示Spinner修改Icon" @click="showIconSpinner"></z-button>
        </div>

        <div style="margin: 10px auto; width: 92%;">
          <z-button val="显示Spinner修改Icon显示文案" @click="showIconTxtSpinner"></z-button>
        </div>
      </div>
    </z-scroll>
  </div>
</template>

<script>
  import { Spinner } from '../../../../src/components'

  export default {
    methods: {
      showSpinner () {
        Spinner.open()
        setTimeout(() => {
          this.closeSpinner()
        }, 3000)
      },
      showIconSpinner () {
        Spinner.open({
          iconName: 'loadingLine'
        })
        setTimeout(() => {
          this.closeSpinner()
        }, 3000)
      },
      showIconTxtSpinner () {
        Spinner.open({
          iconName: 'loadingLine',
          message: '我这是提示在加载中'
        })
        setTimeout(() => {
          this.closeSpinner()
        }, 3000)
      },
      closeSpinner () {
        Spinner.close()
      }
    }
  }
</script>

