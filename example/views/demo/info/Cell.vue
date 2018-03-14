<template>
  <div class="item" style="width: 100vw; height: 100vh;">
    <h3>多列</h3>
    <div style="width: 100%; padding: 10px 0;">
      <z-cell>
        <z-cell-item v-for="(item, index) in data1"
                     :key="index"
                     :title="item.title"
                     :label="item.label"
                     :iconName="item.iconName"
                     :isLink="item.isLink"
                     :disabled="item.disabled"
                     :message="item.message"
                     @click="bindClick">
        </z-cell-item>
      </z-cell>
    </div>
    <h3>单列</h3>
    <div style="width: 100%; padding: 10px 0;">
      <z-cell>
        <z-cell-item v-for="(item, index) in data2"
                     :key="index"
                     :title="item.title"
                     :label="item.label"
                     :iconName="item.iconName"
                     :isLink="item.isLink"
                     :disabled="item.disabled"
                     :message="item.message"
                     @click="bindClick">
        </z-cell-item>
      </z-cell>
    </div>
    <h3>自定义</h3>
    <div style="width: 100%; padding: 10px 0;">
      <z-cell>
        <z-cell-item title="用户名">
          <z-icon name="user" slot="leftIcon" />
          <z-icon name="search" slot="rightIcon" />
        </z-cell-item>
      </z-cell>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        data1: [
          {title: '标题', label: '内容'},
          {title: '标题', label: '内容', message: '我是描述哈哈'},
          {title: '标题', label: '内容', iconName: 'success'},
          {title: '标题', label: '内容', isLink: true},
          {title: '禁用', disabled: true, isLink: true},
          {title: '标题'},
          {label: '内容'},
        ],
        data2: [
          {title: '单个', iconName: 'alipay', isLink: true}
        ]
      }
    },
    methods: {
      bindClick () {
        console.log(22)
      }
    }
  }
</script>
