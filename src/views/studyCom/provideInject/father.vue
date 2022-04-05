<template>
  <div class="bgf5 mh100vh">
    <div class="g42b983 mb20">{{message}}</div>
    <Son @changeMsg="changeMsg"></Son>
  </div>
</template>
<script setup lang="ts">
  import Son from "./son.vue"
  const message = ref<string>('来自父组件的传参')
  provide('message', message)
  const changeMsg = (val) => {
    message.value = val
  }
</script>
<style scoped>
</style>
