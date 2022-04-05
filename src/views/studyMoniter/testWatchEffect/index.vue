<template>
  <div class="bgf5 mh100vh">
    <!--普通监听-->
    <div class="mr10">监听数据改变请输入：</div>
    <input type="text" v-model="message1">
    <!--增加监听前置钩子-->
    <div class="mr10 mt30">数据改变前执行一部分代码</div>
    <input type="text" v-model="message2">
    <!--取消监听的按钮-->
    <div @click="stopWatch" class="mt30 w30 rds30 bdc bg1890ff gf f ac xc pt10 pb10 mb10">取消监听</div>
  </div>
</template>
<script setup lang="ts">
import {watchEffect, ref, reactive} from "vue"
let message1 = ref<string>('张三')
let message2 = ref<string>('李四')
// 进入页面会自动调用一下。此后只要变更内容就会执行
// 1.普通监听
watchEffect(() => {
  alert(message1.value)
})
// 2.增加监听前置钩子
const stopWatchMsg2 = watchEffect((oninvalidate) => {
  oninvalidate(() => { alert('处理之前') })
  alert(message2.value)
})
// 3.取消监听的按钮
const stopWatch = () => stopWatchMsg2()

// 4. 在dom更新之后才出发监听
// watchEffect(() => {
//   console.log('message1====>', message1.value)
//   const ipt:HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
//   console.log(ipt)
// }, {
//   flush: "post", // 获取dom之后监听
//   onTrigger(e) {
//     debugger
//   }
// })
</script>
<style scoped>
</style>
