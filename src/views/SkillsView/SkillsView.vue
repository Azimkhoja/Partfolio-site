<template>
    <Header />
    <RouterView />
    <h1>Skills page loading.</h1>
</template>
<script>
import { RouterView } from 'vue-router';
import Header from '../../components/Header/Header.vue'

export default {
  name: "SkillsView",
  components: {
    Header,
  }
};
</script>
<style lang="css" scoped></style>
