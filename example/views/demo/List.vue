<template>
  <div class="wrapper">
    <z-scroll style="width:100vw;height: 100vh;">
      <z-cell slot="list">
        <z-cell-item :title="item.label" v-for="(item, index) in list" :key="index" @click="link(item)" />
      </z-cell>
    </z-scroll>
  </div>
</template>

<script>
  import { srcList } from '../../utils/config'

  export default {
    computed: {
      list: () => srcList
    },
    methods: {
      link ({ path }) {
        this.$router.push(`/${path}`)
      }
    }
  }
</script>
