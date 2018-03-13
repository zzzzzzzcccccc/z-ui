<template>
  <div class="item">
    <div style="width: 100%;padding: 10px">
      <z-tag val="mini" size="mini"></z-tag>
      <z-tag val="small" size="small"></z-tag>
      <z-tag val="normal"></z-tag>
      <z-tag val="large" size="large"></z-tag>
    </div>

    <div style="width: 100%;padding: 10px">
      <z-tag val="info"></z-tag>
      <z-tag val="primary" type="primary"></z-tag>
      <z-tag val="warning" type="warning"></z-tag>
      <z-tag val="danger" type="danger"></z-tag>
      <z-tag val="success" type="success"></z-tag>
    </div>

    <div style="width: 100%;padding: 10px">
      <z-tag val="info" plain></z-tag>
      <z-tag val="primary" type="primary" plain></z-tag>
      <z-tag val="warning" type="warning" plain></z-tag>
      <z-tag val="danger" type="danger" plain></z-tag>
      <z-tag val="success" type="success" plain></z-tag>
    </div>

    <div style="width: 100%; padding: 10px;">
      <z-tag val="禁用" disabled type="success"></z-tag>
    </div>

    <div style="width: 100%; padding: 10px;">
      <z-tag val="icon" type="success" iconName="success"></z-tag>
      <z-tag type="success" iconName="weixin" size="large"></z-tag>
    </div>

    <div style="width: 100%; padding: 10px;">
      <z-tag val="关闭点击" :isLink="false"></z-tag>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>
