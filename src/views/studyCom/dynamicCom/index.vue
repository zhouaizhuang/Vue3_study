<template>
  <div class="mh100vh bgf7">
    <div class="f">
      <div @click="changeTab('A')" class="tc mr30 pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">切换到A组件</div>
      <div @click="changeTab('B')" class="tc pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">切换到B组件</div>
    </div>
    <component :is="current"></component>
  </div>
</template>
<script setup lang="ts">
import A from "./A.vue"
import B from "./B.vue"
const current = ref(markRaw(A))
const changeTab = (val) => {
  const mapCom = {
    'A': markRaw(A),
    'B': markRaw(B)
  }
  current.value = mapCom[val]
}
</script>
<style scoped>
</style>
