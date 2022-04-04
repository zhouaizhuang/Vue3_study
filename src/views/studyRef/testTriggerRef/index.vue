<template>
  <div class="bgf5 mh100vh">
    <div class="f xc pl20 pr30 mb20">
      <div @click="changeMsg" class="pr20 pl20 pr10 pt10 pb10 bdc rds30 bg1890ff gf">强制更新:</div>
    </div>
    <div class="f1 g42b983 mb30 fs30">测试数据：{{message.name}}</div>
  </div>
</template>
<script setup lang="ts">
  let message = shallowRef({name: '小满'})
  const changeMsg = () => {
    message.value.name = '大满'
    triggerRef(message) // 此处这么玩，就能强制更新
  }
</script>
<style scoped>
</style>
