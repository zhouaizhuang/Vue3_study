<template>
  <layout></layout>
  <B></B>
</template>
<script setup lang="ts">
import layout from "./layout/index.vue"
import B from "./components/B/index.vue"
import { provide } from "vue"
provide('flag', false)
</script>
<style lang='less'>

</style>
