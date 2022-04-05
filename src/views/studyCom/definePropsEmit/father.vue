<template>
  <div class="bgf5 mh100vh">
    <div class="g42b983 mb20">{{message}}</div>
    <Son :content="'我是父组件传入的内容'" @changeMsg="changeMsg"></Son>
  </div>
</template>
<script setup lang="ts">
  import Son from "./son.vue"
  const message = ref<string>('我是父组件的数据：')
  const changeMsg = (val) => {
    message.value = val
  }
</script>
<style scoped>
</style>
