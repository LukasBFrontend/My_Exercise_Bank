<script setup>
import { computed, ref } from 'vue'
import axios from 'axios'
import { useResultStore } from '../store'
import { useRouter } from 'vue-router'

let results = useResultStore()
const router = useRouter()

let exercises = computed(() => results.value)

function redirectUser(page) {
  router.push('/exercise')
}
</script>

<template>
  <h2>Results:</h2>
  <v-row>
    <v-col v-for="exercise in exercises" :key="exercise" cols="4">
      <v-card :title="exercise.name" @click="redirectUser()">
        <v-chip prepend-icon="mdi-target"> {{ exercise.muscle }} </v-chip>
        <v-chip prepend-icon="mdi-dumbbell"> {{ exercise.equipment }} </v-chip>
        <v-chip
          v-if="
            exercise.type == 'powerlifting' ||
            exercise.type == 'strength' ||
            exercise.type == 'strongman' ||
            exercise.type == 'olympic_weightlifting'
          "
          prepend-icon="mdi-arm-flex"
        >
          {{ exercise.type }}
        </v-chip>
        <v-chip
          v-else-if="
            exercise.type == 'plyometrics' || exercise.type == 'cardio'
          "
          prepend-icon="mdi-run"
        >
          {{ exercise.type }}
        </v-chip>
        <v-chip v-else prepend-icon="mdi-yoga">
          {{ exercise.type }}
        </v-chip>
        <v-card-actions>
          <v-btn>Add to program</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
