<script setup>
import { computed, ref, watch } from 'vue'
import { useResultStore } from '../store'
import { useRouter } from 'vue-router'

defineProps({
  searchQuery: String,
})

let results = useResultStore()
let exercises = computed(() => results.value)

const router = useRouter()

function redirectUser(exerciseName) {
  router.push(`/${exerciseName}`)
}
</script>

<template>
  <article class="container">
    <h2 v-if="exercises == null">Loading...</h2>
    <h2 v-else>Results for "{{ searchQuery }}"</h2>
    <br />

    <v-row v-if="exercises == null" v-for="y in 4" :key="y">
      <v-col v-for="x in 3" :key="x">
        <v-skeleton-loader color="white" type="card"> </v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="exercise in exercises" :key="exercise" cols="4">
        <v-card
          :title="exercise.name"
          @click="redirectUser(exercise.name)"
          height="206px"
          class="d-flex flex-column"
        >
          <div class="flex-grow-1">
            <v-chip prepend-icon="mdi-target"> {{ exercise.muscle }} </v-chip>
            <v-chip prepend-icon="mdi-dumbbell">
              {{ exercise.equipment }}
            </v-chip>
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
          </div>
          <v-card-actions>
            <v-btn>Add to program</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </article>
</template>

<style scoped>
.v-card-actions {
  align-self: center;
}
.container {
  padding-bottom: 3rem;
}
</style>
