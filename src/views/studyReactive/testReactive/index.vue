<template>
  <div class="bgf5 mh100vh">
    <div>复杂数据的响应式</div>
    <div class="f mb30">
      <div class="pr10">方式一:</div>
      <div class="f1 g42b983" v-for="item in message" :key="item">{{item}}</div>
    </div>
    <div class="f">
      <div class="pr10">方式二:</div>
      <div class="f1 g42b983" v-for="item in text.list" :key="item">{{item}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
// 方式一：
let message = reactive<number>([])
setTimeout(() => {
  let arr = [1,2,3,4]
  message.push(...arr)
}, 2000)
// 方式二
type O = {
  list: number[]
}
let text = reactive<O>({
  list: []
})
setTimeout(() => {
  text.list = [2,4,6,8]
}, 2000)
</script>
<style scoped>
</style>
