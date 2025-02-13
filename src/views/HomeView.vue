<script setup>
import { ref, computed } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import ResultDisplay from '../components/ResultDisplay.vue'
import ErrorDisplay from '../components/ErrorDisplay.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

let showInputError = ref(false)

function onInputChanged(payload) {
  showInputError.value = !payload.isValidInput
}
</script>

<template>
  <h2>Home</h2>
  <v-img :width="300" :aspect-ratio="1.7" cover src="/equipment.jpg"></v-img>
  <search-bar @input-changed="onInputChanged"></search-bar>
  <error-display :show-input-error="showInputError"></error-display>
  <result-display :search-query="route.query.search"></result-display>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
