<template>
  <div class="w95 db auto indexFontSize mh100vh">
    <div class="fs50r b mb20 mt20 tc">Vue3学习和总结</div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">ref全家桶</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testRef">ref声明与读取</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testIsRef">isRef(判断是否是ref)</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testShallowRef">shallowRef(冻结ref对象)</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testTriggerRef">triggerRef(强制更新ref对象)</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testCustomRef">CustomRef(数据更新侦测)</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">reactive全家桶</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testReactive">reactive声明与读取</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testReadonly">readonly数据改为只读</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testShallowReactive">shallowReactive冻结</router-link></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.min190px{min-width:190px;}
/**PC端和移动端做适配 */
@media screen and (min-width: 320px) {.indexFontSize{font-size: 0.3rem !important;}}
</style>
