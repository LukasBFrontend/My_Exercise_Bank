<script setup>
import { ref } from 'vue'

defineProps({
   msg: String,
})

const count = ref(0)
</script>

<template>
   <h2>About</h2>
   <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
   </ul>
   <v-icon icon="mdi-home" />
   <v-btn> Button </v-btn>
</template>

<style scoped>
.read-the-docs {
   color: #888;
}
</style>
