<script setup>
  import { mainStore } from '../../store'
  import { storeToRefs } from 'pinia'
  const store = mainStore()
  const {msg} = storeToRefs(store)
  // 1、基础修改
  store.msg = '123---' // 直接更改pinia的值
  // 2、批量修改（对象方式）
  store.$patch({
    msg: '1',
    text: '2'
  })
  // 3、批量修改（函数方式）
  // store.$patch((state) => {
  //   state.msg = '1'
  //   state.text = '2'
  // })
  // 4、通过action修改
  store.changeMsg('最终的msg')
</script>
<template src='./index.html'></template>
<style scoped></style>