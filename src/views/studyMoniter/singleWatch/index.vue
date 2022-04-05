<template>
  <div class="bgf5 mh100vh">
    <div class="mr10">深度监听：</div>
    <input type="text" v-model="message1.name">
  </div>
</template>
<script setup lang="ts">
import {watch, reactive} from "vue"
let message1 = reactive({
  name: '张三',
  age:'18'
})
watch(() => message1.name, (newVal, oldVal) => {
  alert('旧值' + JSON.stringify(oldVal)) 
  alert('新值' + JSON.stringify(newVal))
})
</script>
<style scoped>
</style>
