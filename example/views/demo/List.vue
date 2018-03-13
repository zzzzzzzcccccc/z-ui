<template>
  <div class="wrapper">
    <z-scroll style="width:100vw;height: 100vh;">
      <ul slot="list">
        <router-link tag="li" v-for="(item, index) in list" :key="index" :to="`/${item.path}`">
          <z-cell>
            <z-cell-item :title="item.label" />
          </z-cell>
        </router-link>
      </ul>
    </z-scroll>
  </div>
</template>

<script>
  import { srcList } from '../../utils/config'

  export default {
    computed: {
      list: () => srcList
    }
  }
</script>
