<template>
  <div class="item">
    <h3>参数配置说明</h3>
    <pre>
      <code>
          * @params title String 左侧标题
          * @params label String 右侧内容
          * @params iconName String 对应icon组件name
          * @params message String 标题下面的描述
          * @params isLink Boolean 是否可以点击
          * @params disabled Boolean 是否禁用
          * @slot leftIcon 左侧icon 标签
          * @slot name 左侧标题 标签
          * @slot rightIcon 右侧icon 标签
          * @slot label 右侧内容 标签
      </code>
    </pre>
    <h3>普通使用事例</h3>
    <pre>
      <code>
         &lt;z-cell&gt;
            &lt;z-cell-item v-for="(item, index) in data1"
                         :key="index"
                         :title="item.title"
                         :label="item.label"
                         :iconName="item.iconName"
                         :isLink="item.isLink"
                         :disabled="item.disabled"
                         :message="item.message"
                         @click="bindClick"&gt;
            &lt;/z-cell-item&gt;
          &lt;/z-cell&gt;

         data1: [
          {title: '标题', label: '内容'},
          {title: '标题', label: '内容', message: '我是描述哈哈'},
          {title: '标题', label: '内容', iconName: 'success'},
          {title: '标题', label: '内容', isLink: true},
          {title: '标题'},
          {label: '内容'},
          {title: '禁用', disabled: true, isLink: true}
        ]
      </code>
    </pre>
    <h3>自定义用法</h3>
    <pre>
      <code>
        &lt;z-cell&gt;
          &lt;z-cell-item title="用户名"&gt;
            &lt;i slot="leftIcon"&gt;&lt;z-icon name="user" /&gt;&lt;/i&gt;
            &lt;i slot="rightIcon"&gt;&lt;z-icon name="search" /&gt;&lt;/i&gt;
          &lt;/z-cell-item&gt;
        &lt;/z-cell&gt;
      </code>
    </pre>
  </div>
</template>
