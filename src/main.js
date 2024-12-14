/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { initYandexMetrika } from 'yandex-metrika-vue3'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(initYandexMetrika, {
  id: 99215475,
  env: import.meta.env.NODE_ENV,
});

app.mount('#app')
