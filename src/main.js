import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from 'vue-router'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
// Pages

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ExerciseView from './views/ExerciseView.vue'

// Vue Router

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/exercise', component: ExerciseView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app')
