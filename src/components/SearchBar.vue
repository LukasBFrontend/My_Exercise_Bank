<script setup>
import { ref } from 'vue'

defineProps({

})

function onSearch() {
    console.log('hej du sökte');
}

</script>

<template>
    <v-text-field label="Find your exercise...">
        <template v-slot:append>
            <v-btn
            icon
            @click="onSearch"
            class="search-btn"
            >
            <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </template>
    </v-text-field>
</template>

<style scoped>

</style>