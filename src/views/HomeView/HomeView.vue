<template>
  <div class="bg-[#e8f6fc]">
    <div class="container mx-auto ">
      <div class="wrapper flex items-center justify-between py-[134px] ">
        <div class="home__left font-[Roboto]">
          <h2 class="text-[22px] leading-8 font-medium">Hey, I am Azimkhoja</h2>
          <div class="maintext text-[75px] font-bold leading-[90px] mt-[22px] w-[780px]">
            <p>I create <strong  class="text-[#5E3BEE]">product design</strong>  </p>
            <p> and brand experience</p>
          </div>
          <p class="text-2xl w-[622px] leading-9 mt-[21px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          <button class="mt-[53px] bg-[#5E3BEE] text-white p-6 w-[170px] rounded-md text-base">Get In Touch</button>
        </div>
        <div class="home__right w-1/2 flex items-center">
          <img src="@/images/mainimg.png" alt="man foto ">
        </div>

      </div>
    </div>
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
<style scoped>
/* .maintext{
  width: 750px !important;
} */

</style>
