<template>
  <div class="bgf7 mh100vh">
    <div @click="toogleState" class="mb50 tc mr30 pr10 pl10 pr10 pt10 pb10 bdc rds30 bgc7a35d gf">切换状态</div>
    <keep-alive>
      <Login v-if="state == 'login'"></Login>
      <Regist v-else-if="state == 'regist'"></Regist>
    </keep-alive>
  </div>
</template>
<script setup lang="ts">
import Login from "./Login.vue"
import Regist from "./Regist.vue"
  const state = ref<string>('login')
  console.log(state.value)
  const toogleState = () => {
    state.value = state.value == 'login' ? 'regist' : 'login'
  }
  const form = reactive({
    userName: '',
    password: '',
  })
  const submit = () => {
    console.log(form.userName)
    console.log(form.password)
  }

  // 注册
  const registForm = reactive({
    userName: '',
    password: '',
    check:''
  })
  const regist = () => {
    console.log(regist)
  }
</script>
<style scoped>
</style>
