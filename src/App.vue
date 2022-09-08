<template>
  <div>
   {{store.msg }}
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import {reactive, ref, computed} from "vue"
  import { mainStore } from "./store/index.js"
  const store = mainStore()
  setTimeout(store.msg = '==', 1000)
  // store.changeMsg(']]]]]')
</script>
<style lang="less" scoped>
  .a{
    color:pink;
    .b{
      color:blue;
      font-size: 29px;  
    }
  }
</style>
