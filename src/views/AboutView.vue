<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue';

defineProps({
   msg: String,
})

const count = ref(0)
</script>

<template>
   <h2>About</h2>
</template>

<style scoped>
.read-the-docs {
   color: #888;
}
</style>
