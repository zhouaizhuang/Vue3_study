<template>
  <div class="bgf5 mh100vh">
    <div class="mr10">监听数据改变请输入：</div>
    <input type="text" v-model="message1">
    <div class="mr10 mt30">监听数据改变请输入：</div>
    <input type="text" v-model="message2">
  </div>
</template>
<script setup lang="ts">
  import {watch} from "vue"
  let message1 = ref<string>('')
  let message2 = ref<string>('')
  watch([message1, message2], (newVal, oldVal) => {
    alert('旧值' + oldVal)
    alert('新值' + newVal)
  })
</script>
<style scoped>
</style>
