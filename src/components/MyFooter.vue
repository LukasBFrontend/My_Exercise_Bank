<script setup>
import { ref } from 'vue'

defineProps({})

const links = ['Home', 'About Us']
</script>

<template>
  <v-footer class="bg-grey-lighten-4">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2"
        rounded="xl"
        variant="text"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Lukas Bråkenhielm</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.v-footer {
  padding-top: 3rem;
}
</style>
