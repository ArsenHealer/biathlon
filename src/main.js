/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { initYandexMetrika } from 'yandex-metrika-vue3'
import router from './router'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(initYandexMetrika, {
  id: 99215475,
  router: router,
  env: import.meta.env.NODE_ENV,
});

app.mount('#app')
