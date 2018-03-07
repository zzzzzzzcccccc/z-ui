<template>
  <aside>
    <ul class="list">
      <li class="list-header">组件列表</li>
      <li v-for="(item, index) in list" :key="index" @click="bindClick(item)">
        <div class="list-item" :class="activePath === item.path ? 'active' : ''">
          <span class="list-item-label">{{ item.label }}</span>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    props: {
      list: {
        type: [Array, Object],
        required: true
      },
      activePath: {
        type: [String, Number],
        required: true
      }
    },
    methods: {
      bindClick (item) {
        this.$emit('handleClick', item)
      }
    }
  }
</script>

<style scoped lang="less">
  .list{
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  .list-header{
    width: 100%;
    padding-bottom: 20px;
    color: brown;
  }

  .list-item{
    width: 100%;
    cursor: pointer;
    padding: 4px 0;
  }
  .list-item-label{
    position: relative;
  }
  .list-item-label::after{
    content: "";
    display: block;
    width: 0;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -1px;
    background: #2f89ff;
    transition: width .3s ease-in-out;
  }
  .list-item:hover .list-item-label{
    color: #2f89ff;
  }
  .list-item:hover .list-item-label::after{
    width: 100%;
  }

  .active{
    font-weight: 700;
  }
</style>
