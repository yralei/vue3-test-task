
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import routerConfig from './routerConfig'

const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
    history: createWebHistory(),
    routes: routerConfig, 
  })

createApp(App).use(router).use(vuetify).mount('#app')


