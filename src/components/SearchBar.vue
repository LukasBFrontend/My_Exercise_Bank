<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useResultStore } from '../store'

defineProps({})

let input = ''
const results = useResultStore()

async function fetchExercises(query) {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?name=${query}`,
      {
        headers: {
          'X-Api-Key': 'O66dLKHhs8dETGYulEEzPA==YGlpqeMAuT0H1KH2',
        },
      }
    )

    results.set(response.data)
    console.log(results.value)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <v-text-field label="Find your exercise..." v-model="input">
    <template v-slot:append>
      <v-btn icon @click="fetchExercises(input)" class="search-btn">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<style scoped></style>
