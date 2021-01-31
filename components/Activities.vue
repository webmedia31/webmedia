<template>
  <section class="activities">
    <div class="columns">
      <div class="column" v-for="activity in activities" :key="activity.num">
        <div class="activity_number">{{ activity.num }}</div>
        <hr />
        <h2>{{ activity.title }}</h2>

        <div class="services">
          <span v-for="(service, index) in activity.services" :key="service">
            <span>{{ service }}</span>



            <span v-if="index < activity.services.length - 1" class="divider">
              &nbsp;/&nbsp;
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    activities: [
      {
        num: "01",
        title: "UI/UX дизайн",
        services: ["сайты", "интерфейсы", "анализ бизнес-процессов"],
        link: "design"
      },
      {
        num: "02",
        title: "Веб-разработка",
        services: [
          "лендинг",
          "промо-сайт",
          "корпоративный сайт",
          "интернет-магазин"
        ],
        link: "develop"
      },
      {
        num: "03",
        title: "Брендинг",
        services: [
          "нейминг",
          "логотип и фирменнный стиль",
          "упаковка",
          "интерьер"
        ],
        link: "branding"
      },
      {
        num: "04",
        title: "Маркетинг",
        services: ["контекстная реклама", "SMM", "маркетинговое сопровождение"],
        link: "marketing"
      }
    ]
  })
};
</script>
