<template>
  <div class="bgf5">
    <div class="f">
      <div class="pr10">读取变量:</div>
      <div class="f1 g42b983">{{msg}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
  let msg:Ref<string|number> = ref('my name is zhangsan')
</script>
<style scoped>
</style>
