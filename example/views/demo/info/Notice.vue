<template>
  <div class="item">

    <div style="width: 100%; padding: 20px 0;">
      <z-notice>
        1234567890|1234567890|1234567890|1234567890|1234567890
      </z-notice>
    </div>

    <div style="width: 100%; padding: 20px 0;">
      <z-notice :isScroll="false">
        1234567890|1234567890|1234567890|1234567890|1234567890
      </z-notice>
    </div>

    <div style="width: 100%; padding: 20px 0;">
      <z-notice>
        1234567890
      </z-notice>
    </div>

    <div style="width: 100%; padding: 20px 0;">
      <z-notice :showNotice="false" :showClose="false">
        1234567890
      </z-notice>
    </div>

    <div style="width: 100%; padding: 20px 0;">
      <z-notice :showNotice="false" :showClose="false">
        1234567890|1234567890|1234567890|1234567890|1234567890|1234567890
      </z-notice>
    </div>

    <div style="width: 100%; padding: 20px 0;">
      <z-notice>
        <div slot="left">
          定义left标签
        </div>
        1234567890|1234567890|1234567890|1234567890|1234567890|1234567890
        <div slot="right">
          自定义right标签
        </div>
      </z-notice>
    </div>

  </div>
</template>
