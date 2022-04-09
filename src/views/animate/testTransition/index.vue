<template>
  <div class="mh100vh">
    <div @click="flag=!flag" class="dib mt20 pr10 pl10 pr10 pt10 pb10 bdc rds30 bg1890ff gf">点我切换状态</div>
    <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>
<script setup lang="ts">
  let flag:Ref<Boolean> = ref(true)
</script>
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
