<template>
  <div class="item">
    <z-scroll style="height: 100vh; width: 92%; margin: 0 auto">
      <div slot="list">
        <z-button val="info" class="button"></z-button>
        <z-button type="primary" val="primary" class="button"></z-button>
        <z-button type="success" val="success" class="button"></z-button>
        <z-button type="warning" val="warning" class="button"></z-button>
        <z-button type="danger" val="danger" class="button"></z-button>
        <z-button type="primary" val="primary" class="button" loading disabled></z-button>
        <z-button val="plain" class="button" plain></z-button>
        <z-button type="primary" val="plain" class="button" plain></z-button>
        <z-button type="success" val="plain" class="button" plain></z-button>
        <z-button type="warning" val="plain" class="button" plain></z-button>
        <z-button type="danger" val="plain" class="button" plain></z-button>
        <z-button type="primary" val="large" class="button" size="large"></z-button>
        <z-button type="primary" val="small" class="button" size="small"></z-button>
        <z-button type="primary" val="mini" class="button" size="mini"></z-button>
        <z-button type="primary" val="disabled" class="button" disabled>disabled</z-button>
      </div>
    </z-scroll>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../assets/style/item.less";

  .container{
    width: 100%;
    padding: 20px;
  }

  .button{
    display: block;
    margin-bottom: 20px;
  }
</style>
