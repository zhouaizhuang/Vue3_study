<template>
  <div class="bgf5 mh100vh">
    <div class="f xc pl20 pr30 mb20">
      <div @click="changeMsg" class="pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">点我改值:</div>
    </div>
    <div class="f1 g42b983 mb30 fs30">测试数据：{{message}}</div>
  </div>
</template>
<script setup lang="ts">
import {customRef} from "vue"
function MyRef<T>(value:T){
  return customRef((trank, trigger) => {
    return {
      get(){
        console.log('获取当前的值,触发get', value)
        trank()
        return value
      },
      set(newVal:T){
        console.log('设置当前值,触发set', newVal)
        value = newVal
        trigger()
      }
    }
  })
}
let message = MyRef<string>('小满')
const changeMsg = () => {
  message.value = '大满'
}
</script>
<style scoped>
</style>
