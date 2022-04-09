<template>
  <div class="mh100vh">
    <div>过渡类名</div>
    <div @click="flag=!flag" class="dib mt20 pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">点我切换状态</div>
    <!-- <transition
      enter-from-class="fade-enter-from"
      enter-active-class="fade-enter-active"
      enter-to-class="fade-enter-to"
      leave-from-class="fade-leave-from"
      leave-active-class="fade-leave-active"
      leave-to-class="fade-leave-to"
    >
      <div v-if="flag" class="box"></div>
    </transition> -->
    <div class="mt50">结合第三方的动画</div>
    <div @click="flag1=!flag1" class="dib mt20 pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">点我切换状态</div>
    <transition
      :duration="800"
      enter-active-class="animated backInDown"
      leave-active-class="animated backOutDown"
    >
    <!--可以单独约定入场动画和出场耗时:duration="{enter: 50, leave:800}"-->
      <div v-if="flag1" class="box"></div>
    </transition>
  </div>
</template>
<script setup lang="ts">
  let flag:Ref<Boolean> = ref(true)
  let flag1:Ref<Boolean> = ref(true)
</script>
<style src="./animate.css"></style>
<style scoped>
.box{
  width:200px;
  height:200px;
  background:red;
}
/**入场动画 */
.fade-enter-from{
  width:0;
  height:0;
}
.fade-enter-active{
  transition: all 1.5s ease;
}
.fade-enter-to{
  width:200px;
  height:200px;
}
/**出场动画 */
.fade-leave-from{
  width:200px;
  height:200px;
  transform: rotate(360deg);
}
.fade-leave-active{
  transition: all .5s ease;
}
.fade-leave-to{
  width:0;
  height:0;
}
</style>
