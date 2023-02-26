<template>
  <!-- <Header/>
    <RouterView/> -->
    <h1>About me page</h1>
</template>
<script>

import { RouterView } from 'vue-router';
import Header from '../../components/Header/Header.vue'
export default {
  name: "AboutView",
  components: {
    Header,
  }
};
</script>
<style lang="css" scoped></style>
