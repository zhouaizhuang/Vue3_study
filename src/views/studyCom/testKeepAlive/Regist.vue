<template>
  <div>
    <div class="mb15">
      <div class="">帐号</div>
      <input class="f1 pt5 pb5" type="text" v-model="registForm.userName">
    </div>
    <div class="mb30">
      <div class="">密码</div>
      <input class="f1 pt5 pb5" type="text" v-model="registForm.password">
    </div>
    <div class="mb30">
      <div class="">验证码</div>
      <input class="f1 pt5 pb5" type="text" v-model="registForm.check">
    </div>
    <div @click="regist" class="tc mr30 pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">注册</div>
  </div>
</template>
<script setup lang="ts">
import Login from "./Login.vue"
  // 注册
  const registForm = reactive({
    userName: '',
    password: '',
    check:''
  })
  const regist = () => {
    console.log(registForm)
  }
</script>
<style scoped>
</style>
