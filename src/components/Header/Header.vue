<template>
    <header class="bg-green-200">
      <nav class=" flex justify-between items-center mx-[85px] my-6">
        <img alt="logo" class="" src="../../images/Logo.svg"/>
        <ul class="flex justify-between items-center w-[484px]">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/partfolio">Partfolio</RouterLink></li>
          <li><RouterLink to="/aboutme">About me</RouterLink></li>
          <li><RouterLink to="/skills">Skills</RouterLink></li>
        </ul>        
        <span class="border p-3">
          <p>Contact Me</p>
        </span>
      </nav>
  </header>

  <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name:"Header",

    
}
</script>
<style scoped>
    
</style>