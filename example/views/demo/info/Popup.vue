<template>
  <div class="item">
    <z-scroll>
      <div slot="list">
        <div style="width: 92%;margin: 10px auto;">
          <z-button val="底部滑出" @click="showPopup(true)"></z-button>
        </div>
        <div style="width: 92%;margin: 10px auto;">
          <z-button val="顶部滑出" @click="showTopPopup(true)"></z-button>
        </div>
        <div style="width: 92%;margin: 10px auto;">
          <z-button val="左侧滑出" @click="showLeftPopup(true)"></z-button>
        </div>
        <div style="width: 92%;margin: 10px auto;">
          <z-button val="右侧滑出" @click="showRightPopup(true)"></z-button>
        </div>

        <div style="width: 92%;margin: 10px auto;">
          <z-button val="全屏左侧滑出" @click="showScreenLeftPopup(true)"></z-button>
        </div>

        <div style="width: 92%;margin: 10px auto;">
          <z-button val="全屏顶部滑出" @click="showScreenTopPopup(true)"></z-button>
        </div>
      </div>
    </z-scroll>

    <z-popup :syncVisible.sync="visible1">
      <div style="background: #fff; width: 100%; height: 200px;">我是底部滑出</div>
    </z-popup>

    <z-popup :syncVisible.sync="visible2" position="top">
      <div style="background: #fff; width: 100%; height: 200px;">我是顶部滑出</div>
    </z-popup>

    <z-popup :syncVisible.sync="visible3" position="left">
      <div style="background: #fff; width: 100px; height: 100%;">我是左侧滑出</div>
    </z-popup>

    <z-popup :syncVisible.sync="visible4" position="right">
      <div style="background: #fff; width: 100px; height: 100%;">我是右侧滑出</div>
    </z-popup>

    <z-popup :syncVisible.sync="visible5" position="left" screen>
      <div style="background: #fff; width: 100%; height: 100%;">
        <div @click="showScreenLeftPopup(false)">点我关闭</div>
      </div>
    </z-popup>

    <z-popup :syncVisible.sync="visible6" position="top" screen>
      <div style="background: #fff; width: 100%; height: 100%;">
        <div @click="showScreenTopPopup(false)">点我关闭</div>
      </div>
    </z-popup>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        visible6: false
      }
    },
    methods: {
      showPopup () {
        this.visible1 = true
      },
      showTopPopup () {
        this.visible2 = true
      },
      showLeftPopup () {
        this.visible3 = true
      },
      showRightPopup () {
        this.visible4 = true
      },
      showScreenLeftPopup (val) {
        this.visible5 = val
      },
      showScreenTopPopup (val) {
        this.visible6 = val
      }
    }
  }
</script>
