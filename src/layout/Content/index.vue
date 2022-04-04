<template>
  <div class="f1 ml20 mr20 mt20 mb20 ovya" style="border:1px solid #ccc;">
    <!-- <div class="pt20 pl20 pr20 pb20 bdbc" v-for="item in 100" :key="item">
      <Card :content="`我是第${item}个`"></Card>
    </div> -->
    <Dialog>
      <template #header> <!--<template #[name]>--> <!--<template v-slot="header">-->
        <div>我是header</div>
      </template>
      <template #default="row"> <!--{data, index}-->
        <div>{{row.data}}----{{row.index}}</div>
      </template>
      <template #footer> <!--v-slot:footer-->
        <div>我是footer</div>
      </template>
    </Dialog>

    <!--异步组件-->
    <Suspense>
      <template #default>
        <A></A>
      </template>
      <template #fallback> <!--加载出来之前显示啥-->
        <div>loading....</div>
      </template>
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import Dialog from "../../components/Dialog/index.vue"
// import A from "../../components/A/index.vue"
import { defineAsyncComponent, ref } from "vue"
// 动态插槽
let name = ref('footer')

// 异步组件
const A = defineAsyncComponent(() => import('../../components/A/index.vue'))

</script>
<style scoped>
  
</style>
