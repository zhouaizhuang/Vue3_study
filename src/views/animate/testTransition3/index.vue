<template>
  <div class="mh100vh">
    <transition
      appear
      appear-from-class="from"
      appear-active-class="active"
      appear-to-class="to"      
    >
      <div class="box"></div>
    </transition>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.box{
  width:200px;
  height:200px;
  background:red;
}
/**入场动画 */
.from{
  width:0;
  height:0;
}
.active{
  transition: all 1.5s ease;
}
.to{
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
