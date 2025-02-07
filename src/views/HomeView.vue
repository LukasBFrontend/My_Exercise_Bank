<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import ResultDisplay from '../components/ResultDisplay.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h2>Home</h2>
  <v-img :width="300" :aspect-ratio="1.7" cover src="/equipment.jpg"></v-img>
  <search-bar></search-bar>
  <result-display></result-display>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
