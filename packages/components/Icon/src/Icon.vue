<template>
  <component :is="name" class="z-icon" :class="[ `z-button-${name}` ]" />
</template>

<script>
  import {
    success,
    warning,
    error,
    loading,
    loadingPoint,
    loadingLine
  } from '../views'

  export default {
    name: 'zIcon',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    components: {
      success,
      warning,
      error,
      loading,
      loadingPoint,
      loadingLine
    }
  }
</script>
