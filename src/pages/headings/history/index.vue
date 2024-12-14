<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Статьи по теме история</h1>
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
          <v-img class="align-end text-white" height="200" src="@/assets/first-biathlon.jpg" cover>
            <v-card-title>Первые соревнования в Алабино</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            10 ноября
          </v-card-subtitle>

          <v-card-text>
            Погрузитесь в историю самого зрелищного военного спорта через серию уникальных картин. Узнайте, как начинался танковый биатлон и как он превратился в масштабное международное событие.
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text="Перейти" to="/headings/history/first-biathlon"></v-btn>
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
        title: 'История',
        disabled: true,
        href: '/headings/history',
      }
    ],
  }),
}
</script>