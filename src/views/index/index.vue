<script setup>
  import {add} from "./index.js"
  import {ref} from "vue"
  const text = ref(1)
  setTimeout(() => {
    text.value++
  }, 1000)
  const sum = add(1,2)
</script>
<template src="./index.html"></template>
<style scoped></style>