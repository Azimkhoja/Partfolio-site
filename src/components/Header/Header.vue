<template>
  <header class="font-[Roboto] py-6 shadow-md mb">
    <div class="container mx-auto">
      <nav class="flex justify-between items-center  h-[70px]">
        <img alt="logo" class="" src="../../images/Logo.svg" />
        <ul class="flex justify-between items-center w-[484px] text-xl">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/partfolio">Partfolio</RouterLink></li>
          <li><RouterLink to="/aboutme">About me</RouterLink></li>
          <li><RouterLink to="/skills">Skills</RouterLink></li>
        </ul>
        <span class="border-[#5E3BEE] p-3 rounded-md text-xl">
          <p>Contact Me</p>
        </span>
      </nav>
    </div>
  </header>

  <!-- <RouterView /> -->
  <Footer />
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "Header",
};
</script>
<style scoped>
.router-link-active {
  color: #5e3bee !important;
}
</style>
