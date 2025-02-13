<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h2>About</h2>
  <p>
    I created Exercise Bank to allow exercise enthusiasts to browse from a vast
    array of exercises. The website provides an interface between the user and
    Exercises API (provided by API-ninja)
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
