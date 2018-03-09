<template>
  <div class="item">
    <h3>普通弹窗</h3>
    <pre>
      <code>Alert({ message: '我是一个普通Alert' })</code>
    </pre>

    <h3>带iconAlert</h3>
    <pre>
       <code>Alert({ message: '我是一个带iconAlert',  iconName: 'success' })</code>
    </pre>

    <h3>confirm弹窗</h3>
    <pre>
      <code>
      Alert({<br/>
      &nbsp;&nbsp;type: 'confirm',<br/>
      &nbsp;&nbsp;message: '确认提交吗?',<br/>
      &nbsp;&nbsp;callback: boolean => {<br/>
      &nbsp;&nbsp;console.log(boolean)<br/>
      &nbsp;&nbsp;}<br/>
      })
      </code>
    </pre>
  </div>
</template>
