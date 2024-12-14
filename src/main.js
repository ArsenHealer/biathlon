/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';
import VueYandexMetrika from 'vue3-yandex-metrika' 
import router from './router'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(VueYandexMetrika, {
  id: 99215475,
  router: router,
  env: import.meta.env.NODE_ENV,
});

app.mount('#app')
