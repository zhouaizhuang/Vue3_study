<template>
  <div class="bgf5 mh100vh">
    <div class="mr10">深度监听：</div>
    <input type="text" v-model="message1.nav.bar.age">
  </div>
</template>
<script setup lang="ts">
let message1 = ref({
  nav: {
    bar: {
      name: '小满',
      age: 1
    }
  }
})
// message1.value.nav.bar.age++
let message2 = ref<string>('')
watch(message1, (newVal, oldVal) => {
  alert('旧值' + JSON.stringify(oldVal)) 
  alert('新值' + JSON.stringify(newVal))
}, {
  deep:true,
  immediate:true, // 是否一开始加载就执行
})

</script>
<style scoped>
</style>
