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

<style scoped></style>
