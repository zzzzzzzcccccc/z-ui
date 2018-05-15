<template>
  <section v-show="active" class="z-tab-body-main">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'zTabItem',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        active: false
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
