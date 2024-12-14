<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Статьи по теме экипажи</h1>
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
          <v-img class="align-end text-white" height="200" src="@/assets/team-rus.jpg" cover>
            <v-card-title>Российский экипаж на танках УВЗ в 10-й раз победил на «Танковом биатлоне»</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            Россия
          </v-card-subtitle>

          <v-card-text>
            Сборная России на танках Т-72Б3 Уралвагонзавода стала чемпионом «Танкового биатлона-2022», сообщает
            пресс-служба
            УВЗ. Эта победа для наших танкистов - десятая подряд!
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text="Перейти" to="/headings/teams/rus"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
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
        title: 'Экипажи',
        disabled: false,
        href: '/headings/teamsS',
      },
    ],
  }),
}
</script>