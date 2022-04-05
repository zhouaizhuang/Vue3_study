<template>
  <div class="bgf5 mh100vh">
    <div @click="change1" class="w30 rds30 bdc bg1890ff gf f ac xc pt10 pb10 mb10">浅层数据变更</div>
    <div @click="change2" class="w30 rds30 bdc bg1890ff gf f ac xc pt10 pb10 mb10">深层数据变更</div>
    <div class="g42b983 mb20">浅层数据：{{message.test}}</div>
    <div class="g42b983">深层数据：{{message.nav.bar.name}}</div>
  </div>
</template>
<script setup lang="ts">
import {shallowReactive} from "vue"
let message = shallowReactive({
  test: 1,
  nav: {
    bar: {
      name: '我是谁'
    }
  }
})
const change1 = () => {
  message.test++
}
const change2 = () => {
  message.nav.bar.name = 'asdasd'
}
</script>
<style scoped>
</style>
