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
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testToRef">toRef(转ref)</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testToRaw">toRaw(转raw)</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">数据监测</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testComputed">computed计算属性</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testWatch">watch监听</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testWatchMore">watch监听多个</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/deepWacth">watch深度监听</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/watchReactive">reactive自动深度监听</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/singleWatch">单一监听</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testWatchEffect">watchEffect高级侦听器</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">组件</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/useCom">引入组件</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/recursionCom">递归组件</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/definePropsEmit">组件传值propsEmit</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/dynamicCom">动态组件</router-link></div>
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
