<template>
  <div class="item">
    <h3>tab-bar配置参数说明</h3>
    <pre>
      <code>
          * @params backgroundColor 背景色 默认白色
          * @params bottom 距离底部 默认0
          * @params v-model 当前索引
      </code>
    </pre>
    <h3>tab-bar-item配置参数说明</h3>
    <pre>
      <code>
          * @params label String 文案
          * @params iconName String 基于icon组件name
          * @params height Number/String tabbar 高度 默认42px
          * @params point Boolean 是否显示右上角红点
          * @params info Number/String 右上角显示文案
          * @slot icon icon标签
          * @slot label 文案标签
      </code>
    </pre>
    <h3>基础使用方法</h3>
    <pre>
      <code>
         &lt;z-tab-bar v-model="index1"&gt;
            &lt;z-tab-bar-item v-for="(item, index) in data1" :key="index" :label="item.label" :iconName="item.iconName"&gt;
            &lt;/z-tab-bar-item&gt;
         &lt;/z-tab-bar>

        index1: 2,
        data1: [
          {label: '标签', iconName: 'user'},
          {label: '标签', iconName: 'user'},
          {label: '标签'},
          {iconName: 'user'}
        ]
      </code>
    </pre>
    <h3>高级用法</h3>
    <pre>
      <code>
         &lt;z-tab-bar v-model="index2" bottom="100px"&gt;
            &lt;z-tab-bar-item v-for="(item, index) in data2" :key="index"
                            :label="item.label"
                            :iconName="item.iconName"
                            :point="item.point"
                            :info="item.info" @click="bindClick"&gt;
            &lt;/z-tab-bar-item&gt;
         &lt;/z-tab-bar&gt;

        index2: 0,
        data2: [
          {label: '标签', iconName: 'alipay', point: true},
          {label: '标签', iconName: 'weixin', info: 100}
        ]
      </code>
    </pre>
  </div>
</template>
