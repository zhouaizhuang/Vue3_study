<template>
  <div class="bgf5 mh100vh">
    <!--原始数据-->
    <!--冻结数据-->
    <div @click="change" class="w30 rds30 bdc bg1890ff gf f ac xc pt10 pb10 mb10">原始数据加1</div>
    <div class="mb30">{{state}}</div>
    <!--数据显示-->
    <div @click="changeAbc" class="w30 rds30 bdc bg1890ff gf f ac xc pt10 pb10 mb10">数据</div>
    <div>{{abc}}</div>
  </div>
</template>
<script setup lang="ts">
  const obj = reactive({
    foo:1,
    bar:2,
    abc: 3
  })
  const state = toRef(obj, 'bar')
  const change = () => {
    state.value++
    console.log('----->原始对象', obj)
    console.log('----->原始对象', state)
  }
  // 转换为响应式对象
  let {abc} = toRefs(obj)
  const changeAbc = () => {
    abc.value++
  }
</script>
<style scoped>
</style>
