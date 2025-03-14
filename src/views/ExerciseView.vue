<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useResultStore } from '../store'
import { useRoute } from 'vue-router'

let results = useResultStore()
const route = useRoute()

//hitta rätt övning i pinia baserat på adressparameter
let exercise = computed(() => {
  return results.value[
    results.value.findIndex((item) => item.name === route.params.exercise)
  ]
})
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
