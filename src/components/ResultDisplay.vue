<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useResultStore } from '../store'

let results = useResultStore()
</script>

<template>
  <h2>Results:</h2>
  <v-list lines="two">
    <v-list-item
      v-for="result in results.value"
      :key="result"
      :title="result.name"
      :subtitle="result.instructions"
    ></v-list-item>
  </v-list>
</template>

<style scoped></style>
