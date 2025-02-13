<script setup>
import { ref, defineProps } from 'vue'

defineProps({
  showInputError: Boolean,
})
</script>

<template>
  <h3 v-if="showInputError">
    input may not contain any non-alphabetic characters
  </h3>
</template>

<style scoped>
h3 {
  color: red;
}
</style>
