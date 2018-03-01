<template>
  <button>{{ val }}</button>
</template>

<script>
  export default {
    name: 'zButton',
    props: {
      val: {
        type: [String, Number],
        default: ''
      }
    }
  }
</script>
