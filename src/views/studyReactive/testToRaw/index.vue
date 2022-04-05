<template>
  <div class="bgf5 mh100vh">
    <div @click="change" class="w30 rds30 bdc bg1890ff gf f ac xc pt10 pb10 mb10">浅层数据变更</div>
    <div class="g42b983 mb20">浅层数据：{{raw.foo}}</div>
  </div>
</template>
<script setup lang="ts">
  const obj = reactive({
    foo: 1,
    bar: 1
  })
  const raw = toRaw(obj)
  const change = () => { // 数据会改，但是不会同步到视图上
    raw.foo++
  }
</script>
<style scoped>
</style>
