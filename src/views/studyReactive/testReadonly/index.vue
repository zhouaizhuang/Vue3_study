<template>
  <div class="bgf5 mh100vh">
    <!--原始数据-->
    <div @click="addOne" class="w30 rds30 bdc bg1890ff gf f ac xc pt10 pb10 mb10">原始数据加1</div>
    <div class="f mb40">
      <div class="pr10">原始数据:</div>
      <div class="f1 g42b983">{{person.count}}</div>
    </div>
    <!--冻结数据-->
    <div @click="reaadOnlyaddOne" class="pl10 pr10 dib rds30 bdc bg1890ff gf tc pt10 pb10 mb10">测试只读数据加1</div>
    <div class="f mb30">
      <div class="pr10">冻结的数据:</div>
      <div class="f1 g42b983">{{copy.count}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {reactive, readonly} from "vue"
  // 原始数据
  let person = reactive({
    count: 1
  })
  const addOne = () => {
    person.count++
  }

  // 冻结数据
  let copy = readonly(reactive({
    count: 1
  }))
  const reaadOnlyaddOne = () => {
    copy.count++
  }
</script>
<style scoped>
</style>
