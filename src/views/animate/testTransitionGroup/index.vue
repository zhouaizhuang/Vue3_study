<template>
  <div class="mh100vh">
    <div @click="add" class="dib mt20 pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">点我新增</div>
    <div @click="del" class="dib mt20 pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">点我删除</div>
    <div class="f rw wrap bdc">
      <transition-group
        enter-active-class="animated backInDown"
        leave-active-class="animated backOutDown"
      >
        <div class="pt20 pb20 pr20 pl20 fs30" v-for="item in list" :key="item">{{item}}</div>
      </transition-group>
    </div>
  </div>
</template>
<script setup lang="ts">
import {random} from "../../../common.js"
let list = reactive<number>([1,2,3,4,5])
const add = () => {
  list.push(random(1, 20, 'int'))
}
const del = () => {
  list.pop()
}
</script>
<style src="../animate.css"></style>
<style scoped>
</style>
