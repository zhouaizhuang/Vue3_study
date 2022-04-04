<template>
  <div class="bgf5 mh100vh">
    <div class="gf10000 mb30">备注：一旦冻结之后就无法变更数值了</div>
    <div class="f xb pl20 pr30 mb20">
      <div @click="changeMsg" class="pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">点我改值:</div>
      <div @click="shallowMsg" class="pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">点我冻结一个ref对象:</div>
    </div>
    <div class="f1 g42b983 mb30 fs30">测试数据：{{message.name}}</div>
  </div>
</template>
<script setup lang="ts">
  let message = ref({name: '小满'})
  const changeMsg = () => {
    message.value.name = '大满' // 这个是用于性能提升的
  }
  const shallowMsg = () => {
    message = shallowRef({name: '小满'})
  }
</script>
<style scoped>
</style>
