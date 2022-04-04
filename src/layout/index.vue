<template>
  <div class="f h100vh ovh">
    <Menu ref="menus" :data="list" title="我想穿一条裤子" @sayHello="sayHello"></Menu>
    <div class="f1 f cn">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>
<script setup lang="ts">
// 局部组件
import Menu from "./Menu/index.vue"
import Header from "./Header/index.vue"
import Content from "./Content/index.vue"
import { reactive, ref } from "vue"
const menus = ref(null)
// console.log(menus._value)
const list = reactive<number[]>([1,2,3])
const sayHello = (val) => {
  console.log(val)
}

</script>
<style scoped>

</style>
