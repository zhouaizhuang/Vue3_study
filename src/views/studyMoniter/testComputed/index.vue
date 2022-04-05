<template>
  <div class="bgf5 mh100vh">
    <div class="f">
      <div class="mr10">姓：</div>
      <input type="text" v-model="firstName">
    </div>
    <div class="f">
      <div class="mr10">名：</div>
      <input type="text" v-model="lastName">
    </div>
    <div class="mt20">计算属性方式一：{{name}}</div>
    <div class="mt20">计算属性方式二：{{name2}}</div>
  </div>
</template>
<script setup lang="ts">
  let firstName = ref('')
  let lastName = ref('')
  // 方式一：
  const name = computed(() => firstName.value + lastName.value)
  // 方式二：
  const name2 = computed({
    get(){
      return firstName.value  + lastName.value
    },
    set(){
      firstName.value + lastName.value
    }
  })
</script>
<style scoped>
</style>
