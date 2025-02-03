import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import './style.css'

// Components
import App from './App.vue'

const app = createApp(App)

// Pages

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

// Vue Router

const routes = [
   { path: '/', component: HomeView },
   { path: '/about', component: AboutView },
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

app.use(vuetify)
app.use(router)

app.mount('#app')
