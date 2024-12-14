<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Статьи по теме Страны</h1>
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
        <v-card class="mx-auto" max-width="400">
          <v-img class="align-end text-white" height="200" src="@/assets/team-by.jpg" cover>
            <v-card-title>Серебро "Танкового биатлона" у Беларуси</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            Беларусь
          </v-card-subtitle>

          <v-card-text>
            В подмосковном парке "Патриот" торжественно закрылись VIII Армейские Международные игры.
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text="Перейти" to="/headings/teams/by"></v-btn>
          </v-card-actions>
        </v-card>
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
        disabled: false,
        href: '/headings',
      },
      {
        title: 'Страны',
        disabled: false,
        href: '/headings/countries',
      },

    ],
  }),
}
</script>