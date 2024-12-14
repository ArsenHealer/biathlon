/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { router } from '@/router/index'
import VueYandexMetrika from 'vue-yandex-metrika'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)
app.use(VueYandexMetrika, {
  id: 99214913,
  router: router,
})
app.mount('#app')
