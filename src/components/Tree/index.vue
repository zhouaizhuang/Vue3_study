<template>
  <div class="pl10">
    <div @click.stop="clickItem(item)" v-for="(item, index) in data" :key="index">
      {{item.name}}
      <TreeItem v-if="item?.children?.length" :data="item.children"></TreeItem>
    </div>
  </div>
</template>
<script setup lang="ts">
import TreeItem from "./index.vue"
type TreeList = {
  name: string,
  icon?:string,
  children?: TreeList[] | []
}
type Props = {
  data?: TreeList[],
}
defineProps<Props>()
const emit = defineEmits(['on-click'])
const clickItem = (item: TreeItem) => {
  console.log(item, 2222)
  emit('on-click', item)
}
</script>
<style scoped>

</style>
