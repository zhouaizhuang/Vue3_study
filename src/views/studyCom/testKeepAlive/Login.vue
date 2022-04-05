<template>
  <div class="">
    <div>
      <div class="mb15">
        <div class="">帐号</div>
        <input class="f1 pt5 pb5" type="text" v-model="form.userName">
      </div>
      <div class="mb30">
        <div class="">密码</div>
        <input class="f1 pt5 pb5" type="text" v-model="form.password">
      </div>
      <div @click="submit" class="tc mr30 pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">登录</div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const form = reactive({
    userName: '',
    password: '',
  })
  const submit = () => {
    console.log(form)
  }
</script>
<style scoped>
</style>
