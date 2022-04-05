<template>
  <div class="bdc hoverShadow pb30">
    <div class="pt10 pr10 pb10 pl10">
      {{message}}
    </div>
    <div @click="change" class="dib mt20 pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">点我改变父组件数据</div>
  </div>
</template>
<script setup lang="ts">
let message = inject<Ref<string>>('message', ref(''))
console.log(message.value)
const change = () => {
  message.value = '子组件改变了数据'
}
</script>
<style scoped>
.hoverShadow:hover{
  box-shadow: 0 0 10px #ccc;
}
</style>
