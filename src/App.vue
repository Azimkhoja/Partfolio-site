<template>
  <div>
    <Header />
    <section>
      <div>
        <RouterView />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import { RouterView } from "vue-router";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>
