<template>
  <div class="bdc hoverShadow">
    <div class="f xb pt10 pb10 pr10 pl10 bdbc">
      <div class="">主标题</div>
      <div>副标题</div>
    </div>
    <div class="pt10 pr10 pb10 pl10" v-if="content">
      {{content}}
    </div>
  </div>
</template>
<script setup lang="ts">
type Props = {
  content?:string
}
defineProps<Props>()

</script>
<style scoped>
.hoverShadow:hover{
  box-shadow: 0 0 10px #ccc;
}
</style>
