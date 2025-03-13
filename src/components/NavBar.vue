<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import currentDevice from '../script/logic.js'

defineProps({})

//manuellt inskrvna sidlänkar
const device = currentDevice()

const pages = ref([
  { url: '/', text: 'Home' },
  { url: '/about', text: 'About' },
  { url: '/exercise', text: 'Exercise' },
])
</script>

<template>
  <v-toolbar>
    <v-toolbar-title>Exercise Bank</v-toolbar-title>
    <v-menu v-if="device == 'phone'">
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

    <template v-slot:extension v-if="device !== 'phone'">
      <v-tabs>
        <v-tab v-for="(page, i) in pages" :key="i" :text="page.text"></v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<style scoped></style>
