<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Наши контакты в социальных сетях</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          append-icon="mdi-open-in-new"
          title="Telegram"
          class="pa-2"
          height="215"
          hover
          link
          href="https://t.me/+P8-HpGv9IdU3NDM6"
        >
          <v-card-text class="text-h6">
            Танковый биатлон
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          append-icon="mdi-open-in-new"
          title="Вконтакте"
          class="pa-2"
          height="215"
          hover
          link
          href="https://vk.com/club228675930"
        >
          <v-card-text class="text-h6">
            Танковый биатлон
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-h3 d-flex justify-center">
          Танковая выставка
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A34751275c0470b5edce5bda71c1131822eef7045cd46f6c75d73bedbe5389ed6&amp;source=constructor"
          width="500"
          height="400"
          frameborder="0"
        />
      </v-col>
      <v-col>
        <p>
          Вы можете посетить танковую выставку в центральном парке "Патриот" в Московской области недалеко от
          населенного пункта Алабино. На территории имеется свой пресс-центр, огневые рубежи и танковые директрисы.
          Чтобы попасть парк, необходимо связаться с администрацией для получения разрешения.
        </p>
        <v-btn @click="$yandexMetrika.hit('https://tank-biathlon.tw1.ru/about')">Посетить</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>