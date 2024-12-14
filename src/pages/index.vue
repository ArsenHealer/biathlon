<template>
  <v-container>
    <v-row>
      <v-col>
        <v-carousel>
          <v-carousel-item src="@/assets/tank-biathlon.jpg" cover></v-carousel-item>
          <v-carousel-item src="@/assets/image2.jpg" cover></v-carousel-item>
          <v-carousel-item src="@/assets/image3.jpg" cover></v-carousel-item>
          <v-carousel-item src="@/assets/image4.jpg" cover></v-carousel-item>
          <v-carousel-item src="@/assets/image1.jpg" cover></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="d-flex justify-center mt-3">Танковый биатлон — всё о самом зрелищном военном спорте!</h1>
        <div class="text-subtitle-1">Добро пожаловать на сайт, посвящённый захватывающему миру танкового биатлона.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card class="pa-2" height="215" hover>
          <v-card-title class="text-h3">20+ стран</v-card-title>
          <v-card-text class="text-h6">принимают участие в соревнованиях, включая Россию, Китай,
            Индию, Казахстан, Узбекистан и др.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-2" height="215" hover>
          <v-card-title class="text-h3">30+ команд</v-card-title>
          <v-card-text class="text-h6">ежегодно участвуют в соревнованиях из более чем 20 стран
            мира.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-2" height="215" hover>
          <v-card-title class="text-h3">10+ лет</v-card-title>
          <v-card-text class="text-h6">истории танкового биатлона, начиная с первого турнира в 2013
            году.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-parallax src="@/assets/patriot.jpg" rounded>
          <v-container>
            <v-row>
              <v-col class="text-h3 mt-3">Правила соревнований и особенности техники</v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="10">
                <v-list rounded>
                  <v-list-item>
                    <v-list-item-title class="text-h5">Этапы соревнований</v-list-item-title>
                    <v-text class="text-subtitle-1 text-grey-lighten-1">Турнир делится на несколько этапов:
                      индивидуальная гонка, эстафета, полуфиналы и финал. Участники проходят трассу с препятствиями,
                      включая стрельбу, форсирование водных преград и скоростные участки.</v-text>
                  </v-list-item>
                  <v-divider />
                  <v-list-item>
                    <v-list-item-title class="text-h5">Стрельба</v-list-item-title>
                    <v-text class="text-subtitle-1 text-grey-lighten-1">Экипажи выполняют стрельбу из танковых пушек и
                      пулеметов по мишеням на дистанции от 600 до 1800 метров. За промахи добавляются штрафные круги или
                      время.</v-text>
                  </v-list-item>
                  <v-divider />
                  <v-list-item>
                    <v-list-item-title class="text-h5">Препятствия</v-list-item-title>
                    <v-text class="text-subtitle-1 text-grey-lighten-1">Трасса включает такие препятствия, как
                      противотанковый ров, курган, минное поле, серпантин и колейный мост. Танки должны преодолевать их
                      максимально быстро и без ошибок.</v-text>
                  </v-list-item>
                  <v-divider />
                  <v-list-item>
                    <v-list-item-title class="text-h5">Штрафы</v-list-item-title>
                    <v-text class="text-subtitle-1 text-grey-lighten-1">Штрафное время начисляется за ошибки на трассе:
                      сбитые ограничители, остановки на препятствиях, неудачную стрельбу.</v-text>
                  </v-list-item>
                  <v-divider />
                  <v-list-item>
                    <v-list-item-title class="text-h5">Особенности техники</v-list-item-title>
                    <v-text class="text-subtitle-1 text-grey-lighten-1">Для соревнований используют модернизированные
                      танки (чаще всего Т-72Б3). Они оснащены специальными системами для точной стрельбы, улучшенной
                      подвеской и дополнительным оборудованием для экстремальных условий.</v-text>
                  </v-list-item>
                  <v-divider />
                  <v-list-item>
                    <v-list-item-title class="text-h5">Экипаж</v-list-item-title>
                    <v-text class="text-subtitle-1 text-grey-lighten-1">Каждая команда состоит из трех человек:
                      механика-водителя, наводчика и командира. Успех зависит от их слаженной работы.</v-text>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex justify-center text-h3">История турнира</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-timeline align="start">
          <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small">
            <template v-slot:opposite>
              <div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
            </template>
            <div>
              <h2 :class="`mt-n1 headline mb-4 text-${year.color}`">
                {{ year.title }}
              </h2>
              <div>
                {{ year.text }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex justify-center text-h3">Страны-участники</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-slide-group v-model="model" selected-class="bg-success" show-arrows>
          <v-slide-group-item>
            <v-card prepend-icon="mdi-flag" subtitle="страна-организатор" title="Россия" class="mx-3" width="200">
              <v-card-text>Участвует в соревнованиях с 2013 года</v-card-text>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card prepend-icon="mdi-flag" subtitle="страна-участник" title="Китай" class="mx-3" width="200">
              <v-card-text>Присоединился к соревнованиям в 2014 году, активно участвует и использует танк Type
                96B.</v-card-text>
            </v-card>
          </v-slide-group-item>

          <v-slide-group-item>
            <v-card prepend-icon="mdi-flag" subtitle="страна-участник" title="Казахстан" class="mx-3" width="200">
              <v-card-text>Является одним из основателей танкового биатлона, участвует с самого первого турнира в 2013
                году.</v-card-text>
            </v-card>
          </v-slide-group-item>

          <v-slide-group-item>
            <v-card prepend-icon="mdi-flag" subtitle="страна-участник" title="Иран" class="mx-3" width="200">
              <v-card-text>Присоединился к соревнованиям в 2015 году, демонстрирует сильные навыки
                экипажей.</v-card-text>
            </v-card>
          </v-slide-group-item>

          <v-slide-group-item>
            <v-card prepend-icon="mdi-flag" subtitle="страна-участник" title="Венесуэла" class="mx-3" width="200">
              <v-card-text>Участвует с 2014 года, активно развивает военную технику и навыки экипажей.</v-card-text>
            </v-card>
          </v-slide-group-item>

          <v-slide-group-item>
            <v-card prepend-icon="mdi-flag" subtitle="страна-участник" title="Беларусь" class="mx-3" width="200">
              <v-card-text>Участвует в соревнованиях с 2013 года, является одной из первых стран-основателей
                турнира.</v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-subtitle-1">Следующие соревнования состоятся 07.11.2024 в городе Новосибирске по адресу: ул.
          Ключ-Камышенское Плато, 6/2 (ФГК ВОУ ВО «Новосибирский военный ордена Жукова институт имени генерала армии
          И.К.
          Яковлева войск национальной гвардии Российской Федерации»)</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: 'blue',
        year: '2013',
        title: 'Первый турнир',
        text: 'Россия запускает первый международный танковый биатлон на полигоне Алабино. Участники: Россия, Беларусь, Казахстан и Армения.',
      },
      {
        color: 'green',
        year: '2014',
        title: 'Расширение географии',
        text: 'К соревнованиям присоединяются Китай, Индия, Венесуэла и другие страны, увеличивая масштаб турнира.',
      },
      {
        color: 'orange',
        year: '2015',
        title: 'Введение командной эстафеты',
        text: 'Впервые проводится эстафета, которая становится одной из самых захватывающих частей турнира.',
      },
      {
        color: 'red',
        year: '2016',
        title: 'Рост популярности',
        text: 'Турнир становится центральным событием международных армейских игр, привлекая внимание СМИ и зрителей со всего мира.',
      },
      {
        color: 'purple',
        year: '2018',
        title: 'Рекордное число участников',
        text: 'Участие принимают 23 страны, включая впервые присоединившиеся Вьетнам, Сирию и Южноафриканскую Республику.',
      },
      {
        color: 'cyan',
        year: '2020',
        title: 'Онлайн-трансляции',
        text: 'В условиях ограничений пандемии турнир активно транслируется в интернете, что привлекает миллионы зрителей.',
      },
      {
        color: 'gold',
        year: '2023',
        title: '10 лет танковому биатлону',
        text: 'Юбилейный турнир проходит с участием рекордного числа команд. Турнир продолжает расширяться, объединяя армии мира.',
      }
    ],
    model: null,
  }),
}
</script>