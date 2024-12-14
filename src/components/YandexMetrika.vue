<template>
  <div>
    <!-- Yandex.Metrika counter -->
    <noscript>
      <div>
        <img
          src="https://mc.yandex.ru/watch/99214913"
          style="position:absolute; left:-9999px;"
          alt="Yandex Metrika"
        />
      </div>
    </noscript>
  </div>
</template>

<script>
export default {
  name: "YandexMetrika",
  mounted() {
    if (typeof window !== "undefined") {
      this.loadYandexMetrika();
    }
  },
  methods: {
    loadYandexMetrika() {
      const scriptId = "yandex-metrika-script";

      // Проверяем, загружен ли уже скрипт
      if (document.getElementById(scriptId)) {
        this.initYandexMetrika();
        return;
      }

      // Создаем элемент <script>
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://mc.yandex.ru/metrika/tag.js";
      script.async = true;

      // Ждем загрузки скрипта и вызываем инициализацию
      script.onload = () => {
        this.initYandexMetrika();
      };

      // Добавляем скрипт в DOM
      document.head.appendChild(script);
    },
    initYandexMetrika() {
      if (typeof ym === "undefined") {
        console.error("Yandex Metrika script not loaded correctly.");
        return;
      }

      ym(99214913, "init", { // Замените 12345678 на ваш ID
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });

      console.log("Yandex Metrika initialized successfully.");
    },
  },
};
</script>

<style scoped></style>
