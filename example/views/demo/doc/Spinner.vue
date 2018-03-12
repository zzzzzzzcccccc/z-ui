<template>
  <div class="item">
    <h3>默认方法</h3>
    <pre>
      <code>
        import { Spinner } from 'z-ui'

        Spinner.open()
        Spinner.close()
      </code>
    </pre>
    <h3>修改icon(紧支持icon里的name值)</h3>
    <pre>
      <code>
        Spinner.open({
          iconName: 'loadingLine'
        })
      </code>
    </pre>
    <h3>带文案和icon</h3>
    <pre>
      <code>
        Spinner.open({
          iconName: 'loadingLine',
          message: '你的文案'
        })
      </code>
    </pre>
  </div>
</template>
