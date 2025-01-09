<template>
  <swiper
  class="swiper"
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :modules="modules"
    :navigation="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide class="swiper-slide" v-for="(item, index) in introData" :key="item.name + index">
      <div class="swiper-main">
        <h3>{{ item.name }}</h3>
        <p>{{ item.detail }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper core and required modules
import { Pagination, Navigation, A11y, Autoplay } from "swiper/modules";
const modules = [Pagination, Navigation, A11y, Autoplay];

// Import Swiper Vue.js components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

const introData = ref([
  {
    name: "Schwartz’s Value Theory",
    detail: `Schwartz’s Value Theory, proposed by psychologist Shalom Schwartz, provides a framework to describe and analyze basic human values. The theory suggests that values are universal beliefs that guide individual and societal behavior, reflecting personal and cultural differences through their varying priorities.
Schwartz categorizes values into ten core types: Power (status and control), Achievement (success and competence), Hedonism (pleasure and enjoyment), Stimulation (adventure and novelty), Self-Direction (independence and creativity), Universalism (tolerance and protecting nature and humanity), Benevolence (caring for and helping others), Tradition (respecting cultural and religious practices), Conformity (adhering to rules and discipline), and Security (stability and safety). These values are organized in a circular structure that reflects their dynamic relationships. Adjacent values are more compatible, while opposing values (e.g., Stimulation and Security) often conflict.
The theory has wide applications in cultural comparison, behavior prediction, and policy research. For instance, measuring individuals' or groups' value priorities can help predict their decision-making tendencies or policy preferences, providing scientific insights into the behaviors and needs of diverse populations. Schwartz’s Value Theory is highly relevant in fields such as social psychology, education, organizational management, and marketing.`,
  },
  {
    name: "Schwartz’s Value Theory",
    detail: `Schwartz’s Value Theory, proposed by psychologist Shalom Schwartz, provides a framework to describe and analyze basic human values. The theory suggests that values are universal beliefs that guide individual and societal behavior, reflecting personal and cultural differences through their varying priorities.
Schwartz categorizes values into ten core types: Power (status and control), Achievement (success and competence), Hedonism (pleasure and enjoyment), Stimulation (adventure and novelty), Self-Direction (independence and creativity), Universalism (tolerance and protecting nature and humanity), Benevolence (caring for and helping others), Tradition (respecting cultural and religious practices), Conformity (adhering to rules and discipline), and Security (stability and safety). These values are organized in a circular structure that reflects their dynamic relationships. Adjacent values are more compatible, while opposing values (e.g., Stimulation and Security) often conflict.
The theory has wide applications in cultural comparison, behavior prediction, and policy research. For instance, measuring individuals' or groups' value priorities can help predict their decision-making tendencies or policy preferences, providing scientific insights into the behaviors and needs of diverse populations. Schwartz’s Value Theory is highly relevant in fields such as social psychology, education, organizational management, and marketing.`,
  },
  {
    name: "Schwartz",
    detail: `Schwartz’s Value Theory, proposed by psychologist Shalom Schwartz, provides a framework to describe and analyze basic human values. The theory suggests that values are universal beliefs that guide individual and societal behavior, reflecting personal and cultural differences through their varying priorities.
Schwartz categorizes values into ten core types: Power (status and control), Achievement (success and competence), Hedonism (pleasure and enjoyment), Stimulation (adventure and novelty), Self-Direction (independence and creativity), Universalism (tolerance and protecting nature and humanity), Benevolence (caring for and helping others), Tradition (respecting cultural and religious practices), Conformity (adhering to rules and discipline), and Security (stability and safety). These values are organized in a circular structure that reflects their dynamic relationships. Adjacent values are more compatible, while opposing values (e.g., Stimulation and Security) often conflict.
The theory has wide applications in cultural comparison, behavior prediction, and policy research. For instance, measuring individuals' or groups' value priorities can help predict their decision-making tendencies or policy preferences, providing scientific insights into the behaviors and needs of diverse populations. Schwartz’s Value Theory is highly relevant in fields such as social psychology, education, organizational management, and marketing.`,
  },
  {
    name: "Schwartz",
    detail: `Schwartz’s Value Theory, proposed by psychologist Shalom Schwartz, provides a framework to describe and analyze basic human values. The theory suggests that values are universal beliefs that guide individual and societal behavior, reflecting personal and cultural differences through their varying priorities.
Schwartz categorizes values into ten core types: Power (status and control), Achievement (success and competence), Hedonism (pleasure and enjoyment), Stimulation (adventure and novelty), Self-Direction (independence and creativity), Universalism (tolerance and protecting nature and humanity), Benevolence (caring for and helping others), Tradition (respecting cultural and religious practices), Conformity (adhering to rules and discipline), and Security (stability and safety). These values are organized in a circular structure that reflects their dynamic relationships. Adjacent values are more compatible, while opposing values (e.g., Stimulation and Security) often conflict.
The theory has wide applications in cultural comparison, behavior prediction, and policy research. For instance, measuring individuals' or groups' value priorities can help predict their decision-making tendencies or policy preferences, providing scientific insights into the behaviors and needs of diverse populations. Schwartz’s Value Theory is highly relevant in fields such as social psychology, education, organizational management, and marketing.`,
  },
]);

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style scoped lang="scss">
.swiper{}
.swiper-slide{
  .swiper-main{
    padding: 2em 4em;
    h3{
    font-style: italic;
    font-size: 2.5em;
    font-weight: 400;
    line-height: 1.5;
    font-family: 'Times New Roman';
  }
  p{
    font-size: 1.25em;
    line-height: 1.5;
  }
  }
}
:deep(.swiper-pagination-bullet) {
  width: 1em;
  height: 3px;
  background-color: var(--text-color);
  opacity: 0.3;
  border-radius: 1px;
}
:deep(.swiper-pagination-bullet-active) {
  width: 1.25em;
  opacity: 1;
}
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 22px;
  height: 25px;
  color: var(--text-color);
}
:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
  font-size: 1em;
}
:deep(.highlight i) {
  color: rgba(0, 79, 143, 1);
  font-weight: 500;
  line-height: 1.8em;
}
</style>