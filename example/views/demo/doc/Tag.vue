<template>
  <div class="item">
    <h3>配置参数说明</h3>
    <pre>
      <code>
          * @params type String 样式类型
          * @params val String 标签内容
          * @params size String 尺寸
          * @params iconName String 目前紧支持icon组件内的name
          * @params disabled Boolean 是否禁用
          * @params plain Boolean 是否镂空
          * @params round Boolean 是否显示圆角
          * @params isLink Boolean 是否可以被点击
          * @slot icon 标签
          * @slot val 标签
      </code>
    </pre>
    <h3>基础使用</h3>
    <pre>
      <code>
        &lt;z-tag val="mini" size="mini"&gt;&lt;/z-tag&gt;
        &lt;z-tag val="small" size="small"&gt;&lt;/z-tag&gt;
        &lt;z-tag val="normal"&gt;&lt;/z-tag&gt;
        &lt;z-tag val="large" size="large"&gt;&lt;/z-tag&gt;
      </code>
    </pre>
    <h3>样式</h3>
    <pre>
      <code>
        &lt;z-tag val="info" plain&gt;&lt;/z-tag&gt;
        &lt;z-tag val="primary" type="primary" plain&gt;&lt;/z-tag&gt;
        &lt;z-tag val="warning" type="warning" plain&gt;&lt;/z-tag&gt;
        &lt;z-tag val="danger" type="danger" plain&gt;&lt;/z-tag&gt;
        &lt;z-tag val="success" type="success" plain&gt;&lt;/z-tag&gt;
      </code>
    </pre>
    <h3>Icon</h3>
    <pre>
      <code>
        &lt;z-tag val="icon" type="success" iconName="success"&gt;&lt;/z-tag&gt;
        &lt;z-tag type="success" iconName="weixin" size="large"&gt;&lt;/z-tag&gt;
      </code>
    </pre>
  </div>
</template>
