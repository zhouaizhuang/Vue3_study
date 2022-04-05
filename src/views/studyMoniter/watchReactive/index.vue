<template>
  <div class="bgf5 mh100vh">
    <div class="mr10">监听数据改变请输入：</div>
    <input type="text" v-model="message1.nav.bar.name">
  </div>
</template>
<script setup lang="ts">
let message1 = reactive({
  nav: {
    bar: {
      name: '小满'
    }
  }
})
watch(message1, (newVal, oldVal) => {
  alert('旧值' + JSON.stringify(oldVal)) 
  alert('新值' + JSON.stringify(newVal))
})
</script>
<style scoped>
</style>
