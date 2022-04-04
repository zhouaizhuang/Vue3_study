<template>
  <div class="w95 db auto indexFontSize">
    <div class="fs50r b mb20 mt20 tc">Vue3学习和总结</div>
     <div class="f">
      <div class="pr20r b" style="width:2.2rem;">Ref全家桶</div>
        <div class="f1 f xs ac rw">
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testRef">ref声明与读取</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testIsRef">isRef(判断是否是ref)</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/testShallowRef">shallowRef(冻结一个ref对象)</router-link></div>
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
