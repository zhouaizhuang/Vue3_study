<template>
  <div>
    {{data}}
  </div>
</template>
<script setup lang="ts">
import {inject} from "vue"
let data = inject('flag')
console.log(data)
</script>
<style scoped>
</style>
