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
  <v-img
    id="image"
    :width="650"
    :aspect-ratio="1.7"
    cover
    src="/equipment.jpg"
    alt="a pair of dumbells"
  >
    <div class="fill-height gradient"></div>
  </v-img>
  <search-bar @input-changed="onInputChanged"></search-bar>
  <error-display :show-input-error="showInputError"></error-display>
  <result-display :search-query="route.query.search"></result-display>
</template>

<style scoped>
.gradient {
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.45) 0%,
      transparent 30%
    ),
    linear-gradient(to right, rgba(0, 0, 0, 0.45) 0%, transparent 30%);
}
.read-the-docs {
  color: #888;
}
#image {
  margin: 1rem auto;
  border-radius: 8px;
}
</style>
