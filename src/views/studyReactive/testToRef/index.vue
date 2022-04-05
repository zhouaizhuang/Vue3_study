<template>
  <div class="bgf5 mh100vh">
    <!--原始数据-->
    <!--冻结数据-->
    <div @click="change" class="w30 rds30 bdc bg1890ff gf f ac xc pt10 pb10 mb10">原始数据加1</div>
    <div>{{state}}</div>
    </div>
</template>
<script setup lang="ts">
  const obj = reactive({
    foo:1,
    bar:2
  })
  const state = toRef(obj, 'bar')
  const change = () => {
    state.value++
    console.log('----->原始对象', obj)
    console.log('----->原始对象', state)
  }
</script>
<style scoped>
</style>
