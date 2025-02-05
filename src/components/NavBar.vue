<script setup>
import { ref } from 'vue'

defineProps({})

//manuellt inskrvna sidlänkar
const pages = ref([
  { url: '/', text: 'Home' },
  { url: '/about', text: 'About' },
])
</script>

<template>
  <v-toolbar>
    <v-toolbar-title>Exercise Bank</v-toolbar-title>
    <v-menu>
      <!-- knapp -->
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
      </template>

      <!-- dropdown-meny -->
      <v-list>
        <v-list-item
          v-for="(page, i) in pages"
          :key="i"
          style="list-style-type: none"
        >
          <v-btn>
            <li>
              <router-link :to="page.url" style="display: block; width: 100%">
                {{ page.text }}
              </router-link>
            </li>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<style scoped></style>
