<template>
  <!-- <layout></layout>
  <B v-background:aaa.xiaoman="{background:'red'}"></B>
  <div>{{message}}</div>
  <img id="img" width="300" height="300" src="./assets/qnxz_complain.png" />
  <div>{{current}}</div>
  <div>{{name}}</div>
  <div @click="change" class="pl10 pr10 pt10 pb10 bdc">增加</div>
  <div>{{Test.current}}</div> -->
  <!-- <router-link to="/">login</router-link>
  <router-link to="/regist">regist</router-link> -->
  <div style="max-width:8rem;" class="bgf5 auto">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import layout from "./layout/index.vue"
import B from "./components/B/index.vue"
import { DirectiveBinding, provide } from "vue"
// import useBase64 from "./hooks"
import { useTestStore } from "./store"
import { storeToRefs } from "pinia"
const Test = useTestStore()
const change = () => {
  // Test.current++
  /**第二种 */
  // Test.$patch({
  //   current: 888,
  //   name: '娃娃'
  // })
  /**第三种 */
  // Test.$patch(state => {
  //   state.current = 999
  //   state.name = '范冰冰'    
  // })
  /**第四种（缺陷就是修改了所有的值） */
  // Test.$state = {
  //   current: 2000,
  //   name: '小满'
  // }
  /**第五种 */
  Test.setCurrent(567)


  // 重置数据
  // Test.$reset()

  // Test.$subscribe((args, state) => {
  //   console.log(args)
  //   console.log(state)
  // })

  Test.$onAction(arg => {
    args.after(() => {
      console.log('after')
    })
  })
}

// 这样才能具备响应式
const {current, name} = storeToRefs(Test)






// useBase64({el: '#img'}).then(res => {
//   console.log(res.baseUrl);
// })
provide('flag', false)
let message = ref<string>('asdasd===')
const vBackground:Directive = {
  created(){
    console.log('123')
  },  
  beforeMount(){

  },
  mounted(el:HTMLElement, dir:DirectiveBinding<Dir>){
    // console.log(args)
    el.style.background = dir.value.background
  },
  beforeUpdate(){

  },
  updated(){

  },
  beforeUnmount(){

  },
  unmounted(){

  }
}


</script>
<style lang='less'>

</style>
