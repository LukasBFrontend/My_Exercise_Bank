<script setup>
import { ref } from 'vue'
import currentDevice from '../script/logic.js'

const device = currentDevice()
const tab = ref(null)

//manuellt inskrvna sidlänkar
const pages = ref([
  { url: '/', text: 'Home' },
  { url: '/about', text: 'About' },
  { url: '/program', text: 'My Program' },
])
</script>

<template>
  <v-toolbar>
    <v-toolbar-title>Mv Exercise Bank</v-toolbar-title>
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

    <!-- replace v-tabs with some other vuetify component -->
    <template v-slot:extension v-if="device !== 'phone'">
      <v-tabs v-model="tab">
        <v-tab
          v-for="(page, i) in pages"
          :key="i"
          :text="page.text"
          :href="page.url"
        >
        </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<style scoped>
.v-toolbar-title {
  font-size: 2rem;
}
</style>
