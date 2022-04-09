<template>
  <div class="bgf7 mh100vh">
    <div @click="flag=!flag" class=" tc mr30 pr10 pl10 pr10 pt10 pb10 bdc rds30 bgc7a35d gf">切换状态{{flag}}</div>
    <div class="mb50">{{title}}</div>
    <Dialog v-model:title="title" v-model="flag"></Dialog>
    <!-- <Dialog v-model:title.aaa="title" v-model="flag"></Dialog> --><!--增加自定义修饰符-->
  </div>
</template>
<script setup lang="ts">
import Dialog from "./Dialog.vue"
let flag = ref<boolean>(true)
let title = ref<string>('我是tom')
</script>
<style scoped>
</style>
