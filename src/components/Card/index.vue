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
import {
  onBeforeMount, onMounted, onBeforeUpdate,
  onUpdated, onBeforeUnmount, onUnmounted
} from "vue"
type Props = {
  content?:string
}
defineProps<Props>()
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})

</script>
<style scoped>
.hoverShadow:hover{
  box-shadow: 0 0 10px #ccc;
}
</style>
