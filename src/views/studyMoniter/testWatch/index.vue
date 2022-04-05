<template>
  <div class="bgf5 mh100vh">
    <div class="f">
      <div class="mr10">监听数据改变请输入：</div>
      <input type="text" v-model="message">
    </div>
  </div>
</template>
<script setup lang="ts">
  let message = ref<string>('')
  watch(message, (newVal, oldVal) => {
    alert('旧值' + oldVal)
    alert('新值' + newVal)
  })
</script>
<style scoped>
</style>
