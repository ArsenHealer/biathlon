<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Статьи по теме танки</h1>
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
          <v-img class="align-end text-white" height="200" src="@/assets/tank-t72.jpg" cover>
            <v-card-title>Танк Т-72Б3</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            Россия
          </v-card-subtitle>

          <v-card-text>
            Стоит на вооружении вооруженных сил Российской Федерации
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text="Перейти" to="/headings/tanks/tank-t72"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="mx-auto" max-width="400">
          <v-img class="align-end text-white" height="200" src="@/assets/type96b.jpg" cover>
            <v-card-title>Танк Type96B</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            Китай
          </v-card-subtitle>

          <v-card-text>
            Стоит на вооружении армии Китая
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text="Перейти" to="/headings/tanks/type96b"></v-btn>
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
        title: 'Танки',
        disabled: false,
        href: '/headings/tanks',
      },
    ],
  }),
}
</script>