<script setup>
import { ref } from 'vue'
import axios from 'axios'

defineProps({
    /* msg: String, */
})

const count = ref(0)
let exercises = ref(null)

async function fetchExercises() {
    try {
        const response = await axios.get(
            'https://api.api-ninjas.com/v1/exercises?muscle=biceps',
            {
                headers: {
                    'X-Api-Key': 'O66dLKHhs8dETGYulEEzPA==YGlpqeMAuT0H1KH2',
                },
            }
        )

        exercises.value = response.data
        console.log(exercises)
    } catch (error) {
        console.error(error)
    }
}

/* fetchExercises() */
</script>

<template>
    <h2>Results:</h2>
    <v-list lines="two">
        <v-list-item
            v-for="exercise in exercises"
            :key="exercise"
            :title="exercise.name"
            :subtitle="exercise.instructions"
        ></v-list-item>
    </v-list>
</template>

<style scoped></style>
