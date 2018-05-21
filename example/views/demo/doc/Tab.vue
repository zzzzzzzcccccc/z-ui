<template>
  <div>
    <h3>配置参数说明</h3>
    <pre>
      <code>
  * @params tabsStyle           tabs的样式
  * @params lineBackGroundColor 底部下滑线的颜色
  * @params activeTextStyle     激活的字体颜色
  * @params inactiveTintStyle   未激活的颜色
  * @params lock                是否开启左右滑动切换
      </code>
    </pre>

    <h3>多列</h3>
    <pre>
      <code>
        &lt;z-tab v-model="activeIndex1"&gt;
          &lt;z-tab-item v-for="index in 12" :key="index" :title="`选项${index}`"&gt;
             &lt;div style="height: 100px"&gt;
              内容{{ index }}
             &lt;/div&gt;
          &lt;/z-tab-item&gt;
        &lt;/z-tab&gt;
      </code>
    </pre>
  </div>
</template>
