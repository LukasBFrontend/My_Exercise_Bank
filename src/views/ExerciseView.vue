<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useResultStore } from '../store'

let results = useResultStore()

let exercise = computed(() => {
  return results.value[0]
})
</script>

<template>
  <v-container>
    <v-card :title="exercise.name" :text="exercise.instructions">
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
        v-else-if="exercise.type == 'plyometrics' || exercise.type == 'cardio'"
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
  </v-container>
</template>

<style scoped></style>
