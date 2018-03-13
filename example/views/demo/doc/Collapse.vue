<template>
  <div class="item">
    <h3>coll-apse配置参数</h3>
    <pre>
      <code>
        * @params accordion Boolean 是否启用手风情模式
        * @params defaultIndex Array 设置默认展开
      </code>
    </pre>
    <h3>coll-apse-item配置参数</h3>
    <pre>
      <code>
          * @params title String/Number 说明
          * @params disabled Boolean 是否被禁用
          * @slot header 若需要自定义标题
      </code>
    </pre>
    <h3>基础使用实例</h3>
    <pre>
      <code>
        &lt;z-collapse :defaultIndex="[0]"&gt;
          &lt;z-collapse-item title="标题a" @click="clickItem"&gt;
            哈哈哈哈1
          &lt;/z-collapse-item&gt;
          &lt;z-collapse-item title="标题b"&gt;
            哈哈哈哈2
          &lt;/z-collapse-item&gt;
          &lt;z-collapse-item title="标题c"&gt;
            哈哈哈哈3
          &lt;/z-collapse-item&gt;
        &lt;/z-collapse&gt;
      </code>
    </pre>
    <h3>手风情模式</h3>
    <pre>
      <code>
         &lt;z-collapse :defaultIndex="[1]" accordion&gt;
            &lt;z-collapse-item title="被禁用" disabled&gt;
              哈哈哈哈1
            &lt;/z-collapse-item&gt;
            &lt;z-collapse-item title="标题b"&gt;
              哈哈哈哈2
            &lt;/z-collapse-item&gt;
            &lt;z-collapse-item title="标题c"&gt;
              哈哈哈哈3
            &lt;/z-collapse-item&gt;
         &lt;/z-collapse&gt;
      </code>
    </pre>
  </div>
</template>
