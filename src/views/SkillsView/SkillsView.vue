<template>
  <div class=" py-[148px]">

    <div class="container mx-auto">
      <h2 class="text-[28px] font-medium font-[Roboto]">My Skills </h2>
    <h2 class="text-[64px] font-bold mb-[106px] font-[Roboto]">My Expertise</h2>
    <div class="card_wrapper flex items-center  gap-[42px] font-[Roboto]">
      <div class="card flex flex-col items-start p-8 bg-[#F5FCFF] w-[405px] h-[370px] rounded-[10px] shadow-xl hover:border-b-[#5E3BEE]">
        <span class="bg-white p-4 rounded-[10px] shadow-2xl mb-8">
          <img src="@/assets/product-chain 1.svg" alt="chain logo">
        </span>
        <h2 class="text-[28px] font-bold mb-[21px]">Strategy & Direction</h2>
        <p class="text-[22px] leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
      <!-- card 2 -->
      <div class="card flex flex-col items-start p-8 bg-[#F5FCFF] w-[405px] h-[370px] rounded-[10px] shadow-xl hover:border-b-[#5E3BEE]">
        <span class="bg-white p-4 rounded-[10px] shadow-2xl mb-8">
          <img src="@/assets/tag 1.svg" alt="baijik logo">
        </span>
        <h2 class="text-[28px] font-bold mb-[21px]">Branding & Logo</h2>
        <p class="text-[22px] leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
      <!-- card 3 -->
      <div class="card flex flex-col items-start p-8 bg-[#F5FCFF] w-[405px] h-[370px] rounded-[10px] shadow-xl hover:border-b-[#5E3BEE]">
        <span class="bg-white p-4 rounded-[10px] shadow-2xl mb-8">
          <img src="@/assets/feather-pen 1.svg" alt="chain logo">
        </span>
        <h2 class="text-[28px] font-bold mb-[21px]">UI & UX Design</h2>
        <p class="text-[22px] leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
      <!-- card 4 -->
      <div class="card flex flex-col items-start p-8 bg-[#F5FCFF] w-[405px] h-[370px] rounded-[10px] shadow-xl hover:border-b-[#5E3BEE]">
        <span class="bg-white p-4 rounded-[10px] shadow-2xl mb-8">
          <img src="@/assets/brackets.svg" alt="chain logo">
        </span>
        <h2 class="text-[26px] font-bold mb-[21px]">Webflow Development</h2>
        <p class="text-[22px] leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
    </div>
  </div>    
</div>
</template>
<script>
import { RouterView } from 'vue-router';
import Header from '@/components/Header/Header.vue'

export default {
  name: "SkillsView",
  components: {
    Header,
  }
};
</script>
<style lang="css" scoped></style>
