<template>
  <div class="py-[150px] bg-[#e8f6fc]">
    <div class="container mx-auto">
      <h2 class="text-2xl font-medium font-[Roboto]">Clients Feedback</h2>
      <h2 class="text-[60px] font-bold font-[Roboto] mb-[100px]">
        What customers says
      </h2>
      <div class="flex items-center font-[Roboto] gap-7">
        <div
          class="feedback flex flex-col p-7 justify-between w-[490px] h-[350px]"
        >
          <ul class="flex gap-1">
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
          </ul>
          <p class="my-10 text-xl w-[446px] h-[96px] leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra.
          </p>
          <div class="flex items-center">
            <img src="@/assets/Avatar Image-1.png" alt="circle photo" />
            <div class="flex flex-col ml-[22px]">
              <p class="text-lg font-medium">Dianne Russell</p>
              <p class="text-lg">Starbucks</p>
            </div>
          </div>
        </div>
        <!-- card 2 -->
        <div
          class="feedback flex flex-col justify-between p-7 w-[490px] h-[350px]"
        >
          <ul class="flex gap-1">
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
          </ul>
          <p class="my-10 text-xl w-[446px] h-[96px] leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra.
          </p>
          <div class="flex items-center">
            <img src="@/assets/Avatar Image-2.png" alt="circle photo" />
            <div class="flex flex-col ml-[22px]">
              <p class="text-lg font-medium">Dianne Russell</p>
              <p class="text-lg">Starbucks</p>
            </div>
          </div>
        </div>
        <!-- card 3 -->
        <div
          class="feedback flex flex-col justify-between p-7 w-[490px] h-[350px]"
        >
          <ul class="flex gap-1">
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
            <li><img src="@/assets/star.svg" alt="" /></li>
          </ul>
          <p class="my-10 text-xl w-[446px] h-[96px] leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra.
          </p>
          <div class="flex items-center">
            <img src="@/assets/Avatar Image-3.png" alt="circle photo" />
            <div class="flex flex-col ml-[22px]">
              <p class="text-lg font-medium">Dianne Russell</p>
              <p class="text-lg">Starbucks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommentView",
};
</script>

<style lang="css" scoped>
.feedback {
  border: 1px solid #006b6a;
  border-radius: 8px;
}
</style>
