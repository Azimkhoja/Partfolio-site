<template>
  <header class="font-[Roboto] py-6 shadow-lg">
    <div class="container mx-auto">
      <nav class="flex justify-between items-center h-[70px]">
        <img alt="logo" class="" src="@/assets/Logo.svg" />
        <ul class="flex justify-between items-center w-[504px] text-xl">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/skills">Skills</RouterLink></li>
          <li><RouterLink to="/aboutme">About me</RouterLink></li>
          <li><RouterLink to="/partfolio">Partfolio</RouterLink></li>
          <li><RouterLink to="/comments">Comments</RouterLink></li>
        </ul>
        <span class="contact p-3 rounded-md text-xl">
          <RouterLink to="/contact"><p>Contact Me</p></RouterLink>
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
.contact {
  border: 2px solid #5e3bee !important;
  color: #5e3bee;
  /* border-color: #5e3bee !important; */
}
.contact:hover {
  background-color: #5e3bee !important;
  color: white !important;
  transition-duration: 500ms;
}
</style>
