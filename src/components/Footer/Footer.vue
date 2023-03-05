<template>
  <footer class="bg-[#F5FCFF] py-20">
    <div class="container mx-auto">
      <nav class="flex justify-between items-center mb-[80px] h-[70px]">
        <img alt="logo" class="" src="../../../public/Logo.svg" />
        <ul class="flex justify-between items-center w-[564px] text-xl">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/skills">Skills</RouterLink>
          </li>
          <li>
            <RouterLink to="/aboutme">About me</RouterLink>
          </li>
          <li>
            <RouterLink to="/partfolio">Partfolio</RouterLink>
          </li>
          <li>
            <RouterLink to="/comments">Comments</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
        <div class="flex justify-between items-center w-[156px]">
          <a href="https://t.me/Azimxoja_A">
            <img
              class="hover:scale-110 duration-150 hover:bg-[#bfe5f5] hover:rounded-lg"
              src="../../../public/Facebook.svg"
              alt="logo facebook"
            />
          </a>
          <a href="https://t.me/Azimxoja_A">
            <img
              class="hover:scale-110 duration-150 hover:bg-[#bfe5f5] hover:rounded-lg"
              src="../../../public/Instagram.svg"
              alt="logo instagram"
            />
          </a>
          <a href="https://t.me/Azimxoja_A">
            <img
              class="hover:scale-110 duration-150 hover:bg-[#bfe5f5] hover:rounded-lg"
              src="../../../public/Twitter.svg"
              alt="logo twitter"
            />
          </a>
          <a href="https://t.me/Azimxoja_A">
            <img
              class="hover:scale-110 duration-150 hover:bg-[#bfe5f5] hover:rounded-lg"
              src="../../../public/LinkedIn.svg"
              alt="logo linkedin"
            />
          </a>
        </div>
      </nav>
      <hr class="bg-black h-0.5" />
      <div class="flex justify-between items-center mt-8 font-[Roboto]">
        <h2 class="font-medium">Made with heart by Azimkhoja</h2>
        <ul class="flex justify-between items-center w-[365px]">
          <li class="hover:scale-105 hover:text-violet-600 duration-150">
            Privecy Police
          </li>
          <li class="hover:scale-105 hover:text-violet-600 duration-150">
            Term of Service
          </li>
          <li class="hover:scale-105 hover:text-violet-600 duration-150">
            Cookie Settings
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.router-link-active {
  color: #5e3bee !important;
}
</style>
