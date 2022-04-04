<template>
  <div class="bgf5">
    <div class="f">
      <div class="pr10">判断是否是ref:</div>
      <div class="f1 g42b983">{{state}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
  let msg:Ref<string|number> = ref('my name is zhangsan')
  const state = isRef(msg)
  console.log(state)
</script>
<style scoped>
</style>
