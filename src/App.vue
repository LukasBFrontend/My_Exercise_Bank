<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DataPrint from './components/DataPrint.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <data-print></data-print>
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
