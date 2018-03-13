<template>
  <div class="item">
    <h3>默认</h3>
    <div style="padding: 10px 0;">
      <z-collapse :defaultIndex="[0]">
        <z-collapse-item title="标题a" @click="clickItem">
          哈哈哈哈1
        </z-collapse-item>
        <z-collapse-item title="标题b">
          哈哈哈哈2
        </z-collapse-item>
        <z-collapse-item title="标题c">
          哈哈哈哈3
        </z-collapse-item>
      </z-collapse>
    </div>
    <h3>手风情模式</h3>
    <div style="padding: 10px 0;">
      <z-collapse :defaultIndex="[1]" accordion>
        <z-collapse-item title="被禁用" disabled>
          哈哈哈哈1
        </z-collapse-item>
        <z-collapse-item title="标题b">
          哈哈哈哈2
        </z-collapse-item>
        <z-collapse-item title="标题c">
          哈哈哈哈3
        </z-collapse-item>
      </z-collapse>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      clickItem (e) {
      }
    }
  }
</script>

