<template>
  <div class="container_wrapper mx-auto">
    <RouterView />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import HomeView from "./views/HomeView/HomeView.vue";
import PartfolioView from "./views/PartfolioView/PartfolioView.vue";
import AboutView from "./views/AboutView/AboutView.vue";
import SkillsView from "./views/SkillsView/SkillsView.vue";
import { RouterView } from "vue-router";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    HomeView,
    PartfolioView,
    AboutView,
    SkillsView,
  },
};
</script>

<style scoped>
.container_wrapper {
  max-width: 1920px;
  padding: 0 20px 0 20px;
}
</style>
