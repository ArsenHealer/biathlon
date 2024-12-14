<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Рубрики</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-breadcrumbs :items="breadcrumbs">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card append-icon="mdi-delta" subtitle="история создания танкового биатлона" title="История" link
          to="/headings/history">
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card append-icon="mdi-tank" subtitle="модели танков, использующихся в играх" title="Танки" link
          to="/headings/tanks"></v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card append-icon="mdi-account-group" subtitle="искусство военной команды" title="Экипажи" link
          to="/headings/teams"></v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card append-icon="mdi-earth" subtitle="танковый биатлон через призму стран" title="Страны" link
          to="/headings/countries"></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    breadcrumbs: [
      {
        title: 'Главная',
        disabled: false,
        href: '/',
      },
      {
        title: 'Рубрики',
        disabled: true,
        href: '/headings',
      }
    ],
  }),
}
</script>