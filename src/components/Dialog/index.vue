<template>
  <div>
    <header class="bgff5650" style="height:100px;">
      <slot name="header"></slot>
    </header>
    <main class="bg1890ff" style="height:200px;">
      <div v-for="(item, index) in data" :key="item">
        <slot :index="index" :data="item"></slot> <!--匿名插槽--> <!--插槽传参-->
      </div>
    </main>
    <footer class="bgc7a35d" style="height:100px;">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue"
type names = {
  name: string,
  age: number
}
const data = reactive<names[]>([{
  name: '小满插槽',
  age:20
}])
</script>
<style scoped>
</style>
