<template>
  <div>
    <div v-for="item in list" :key="item">{{item.name}}</div>
  </div>
</template>
<script setup lang="ts">
import {axios} from "../../libs/network.ts"
const list = await axios('./data.json') // 异步组件
console.log(list)
</script>
<style scoped>
</style>
