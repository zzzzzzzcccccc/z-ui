<template>
  <div class="item">
    <h3>配置参数说明</h3>
    <pre>
      <code>
          * @params color String 字体颜色
          * @params backgroundColor String 背景色
          * @params isScroll Boolean 是否滚动
          * @params speed Number 滚动速度
          * @params delay Number 滚动间隔
          * @params showNotice Boolean 是否显示左侧
          * @params showClose Boolean 是否显示右侧
      </code>
    </pre>
    <h3>暴露方法</h3>
    <pre>
      <code>
        @change 内置visible变化
        @handleClose 关闭事件
      </code>
    </pre>
    <h3>使用案例</h3>
    <pre>
      <code>
        &lt;z-notice&gt;1234567890|1234567890|1234567890|1234567890|1234567890&lt;/z-notice&gt;
      </code>
    </pre>
    <pre>
      <code>
        &lt;z-notice :isScroll="false"&gt;1234567890|1234567890|1234567890|1234567890|1234567890&lt;/z-notice&gt;
      </code>
    </pre>
    <pre>
      <code>
          &lt;z-notice&gt;
            &lt;div slot="left"&gt;
              定义left标签
            &lt;/div&gt;
            1234567890|1234567890|1234567890|1234567890|1234567890|1234567890
            &lt;div slot="right"&gt;
              自定义right标签
            &lt;/div&gt;
          &lt;/z-notice&gt;
      </code>
    </pre>
    <pre>
      <code>
         &lt;z-notice :showNotice="false" :showClose="false"&gt;
          1234567890|1234567890|1234567890|1234567890|1234567890|1234567890
         &lt;/z-notice&gt;
      </code>
    </pre>
  </div>
</template>
