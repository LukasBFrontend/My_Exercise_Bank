<script setup>
import ResultDisplay from './components/ResultDisplay.vue'
import NavBar from './components/NavBar.vue'
import MyFooter from './components/MyFooter.vue'
</script>

<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <my-footer></my-footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
