<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue';

defineProps({
   msg: String,
})

const count = ref(0)
</script>

<template>
   <h2>Home</h2>
   <search-bar></search-bar>
</template>

<style scoped>
.read-the-docs {
   color: #888;
}
</style>
