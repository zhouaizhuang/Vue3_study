<template>
  <div class="mh100vh">
    <div @click="randomList" class="w20 tc mb30 auto mt20 pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">随机</div>
    <transition-group
      tag="div"
      class="f rw wrap boxWidth"
      move-class="move"
    >
      <div class="bdc f ac xc" style="width:25px;height:25px;" v-for="item in list" :key="item.id">{{item.number}}</div>
    </transition-group>
  </div>
</template>
<script setup lang="ts">
import { shuffle } from "../../../common.js"
let list = ref(Array.apply(null, {length: 81} as number[]).map((_, index) => ({id:index, number: index % 9 + 1})))
const randomList = () => {
  list.value = shuffle(list.value)
}
</script>
<style src="../animate.css"></style>
<style scoped>
.boxWidth{
  width: 259px;
}
.move{
  transition: all ease 1s;
}
</style>
