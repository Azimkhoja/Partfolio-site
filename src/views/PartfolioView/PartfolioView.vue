<template>
  <div class="py-[150px]">
    <div class="container mx-auto">
      <h2 class="text-[28px] font-medium font-[Roboto]">Recent Projects</h2>
      <div class="flex justify-between items-center">
        <h2 class="text-[64px] font-bold  font-[Roboto]">
          My Partfolio
        </h2>
        <div class="flex items-center justify-between bg-[#E62872] hover:bg-[#542cf2] duration-200 p-[22px] rounded-lg w-[230px]">
        <img src="@/images/Vector.svg" alt="ball logo">
        <h2 class="text-lg text-white">Visit My Dribble</h2>
        </div>
      </div>
      <div class="card_wrapper flex items-center gap-[42px] font-[Roboto] mt-[106px]">
        <div class="w-[500px] h-[600px] flex flex-col rounded-lg shadow-lg">
          <img src="@/images/1project.png" alt="project photo">
          <div class="p-7 flex  flex-col">
            <h2 class="text-2xl font-bold">I-ticket</h2>
            <p class="text-xl mt-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros.</p>

            <div class="flex  items-center mt-7 border-b-violet-600	">
              <h2 class="text-xl mr-4 text-violet-600">View In Dribble</h2>
              <img src="@/images/strelka.svg" alt="">
            </div>
          </div>
        </div>
        <!-- card 2 -->
        <div class="w-[500px] h-[600px] flex flex-col rounded-lg shadow-lg">
          <img src="@/images/2project.png" alt="project photo">
          <div class="p-7 flex  flex-col">
            <h2 class="text-2xl font-bold">Admin Dashboard</h2>
            <p class="text-xl mt-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros.</p>

            <div class="flex  items-center mt-7 border-b-violet-600	">
              <h2 class="text-xl mr-4 text-violet-600">View In Dribble</h2>
              <img src="@/images/strelka.svg" alt="">
            </div>
          </div>
        </div>
        <!-- card 3 -->
        <div class="w-[500px] h-[600px] flex flex-col rounded-lg shadow-lg">
          <img src="@/images/3project.png" alt="project photo">
          <div class="p-7 flex  flex-col">
            <h2 class="text-2xl font-bold">RentaCar</h2>
            <p class="text-xl mt-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros.</p>

            <div class="flex  items-center mt-7 border-b-violet-600	">
              <h2 class="text-xl mr-4 text-violet-600">View In Dribble</h2>
              <img src="@/images/strelka.svg" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import Header from "../../components/Header/Header.vue";
export default {
  name: "PartfolioView",
  components: {
    Header,
  },
};
</script>
<style lang="css" scoped></style>
