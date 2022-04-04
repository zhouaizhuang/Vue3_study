<template>
  <layout></layout>
  <B></B>
  <div>{{message}}</div>
</template>
<script setup lang="ts">
import layout from "./layout/index.vue"
import B from "./components/B/index.vue"
import { provide } from "vue"
provide('flag', false)
let message = ref<string>('asdasd===')
</script>
<style lang='less'>

</style>
