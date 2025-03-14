<script setup>
import axios from 'axios'
import { watch, ref, defineEmits } from 'vue'
import { useResultStore } from '../store'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const emit = defineEmits(['input-changed'])

let input = ref('')

const router = useRouter()
const results = useResultStore()
const route = useRoute()

if (route.fullPath == '/') {
  updatePath('bicep')
  fetchExercises('bicep')
}

watch(input, () => {
  let regex = /\d/
  console.log(input.value)
  if (!regex.test(input.value)) {
    emit('input-changed', { isValidInput: true })
  } else {
    emit('input-changed', { isValidInput: false })
  }
})

function onSearch(query) {
  updatePath(query)
  results.value = null
  fetchExercises(query)
}
function updatePath(query) {
  router.push({ path: '/', query: { search: query } })
}

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
    results.value = response.data
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <v-text-field
    v-on:keyup.enter="onSearch(input)"
    label="Find your exercise..."
    v-model="input"
  >
    <template v-slot:append>
      <v-btn icon @click="onSearch(input)" class="search-btn">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<style scoped></style>
