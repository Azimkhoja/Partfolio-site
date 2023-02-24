<template>
  <div>
    <Header/>
    <RouterView/>
    <h1>Home page</h1>
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
import Header from '../../components/Header/Header.vue';
export default {
  name: "HomeView",
  components :{
    Header
  }
};
</script>
<style scoped></style>
