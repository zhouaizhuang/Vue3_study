<template>
  <div v-if="modelValue" class="bgf auto bdc" style="width:300px;">
    <div class="f xb pt20 pb10 bdbe5">
      <div class="f1 tc">标题----{{title}}</div>
      <div @click="close" class="pr10">x</div>
    </div>
    <div class="pl30 pr30 pb30 mt20">内容</div>
  </div>
</template>
<script setup lang="ts">
type Props = {
  modelValue: boolean,
  title:string,
  titleModifiers?:{
    aaa: boolean
  }
}
const propsData = defineProps<Props>()
const emit = defineEmits(['update:modelValue', 'update:title'])
const close = () => {
  console.log(propsData.titleModifiers?.aaa)
  if(propsData.titleModifiers?.aaa) {
    emit('update:title', '我是张三')
  } else {
    emit('update:title', '我是Tom')
  }
  emit('update:modelValue', false)
}
</script>
<style scoped>
</style>
