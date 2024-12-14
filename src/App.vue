<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
        <v-toolbar-title>Танковый биатлон</v-toolbar-title>
        <v-spacer />
      </v-app-bar>


      <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
        <v-list>
          <v-list-item title="Главная" to="/" />
          <v-list-group value="Admin">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Рубрики" to="/headings"></v-list-item>
            </template>

            <v-list-item v-for="([title, icon, link], i) in admins" :key="i" :append-icon="icon" :title="title"
              :value="title" :to="link"></v-list-item>
          </v-list-group>
          <v-list-item title="О нас" to="/about" />
        </v-list>
      </v-navigation-drawer>
      <router-view />
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script setup>

import AppFooter from './components/AppFooter.vue';

</script>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Главная',
        value: '',
      },
      {
        title: 'Трафареты',
        value: 'stencil',
      },
      {
        title: 'Войти',
        value: 'login',
      },
    ],
    admins: [
      ['История', 'mdi-delta', "/headings/history"],
      ['Танки', 'mdi-tank', "/headings/tanks"],
      ['Экипажи', "mdi-account-group", "/headings/teams"],
      ["Страны", "mdi-earth", "/headings/countries"]
    ],
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
