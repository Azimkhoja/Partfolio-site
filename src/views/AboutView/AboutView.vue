<template>
  <div class="py-[134px]">
    <div class="container mx-auto">
      <div
        class="aboutn_me flex justify-between items-center font-[Roboto] gap-[114px]"
      >
        <div class="left">
          <img src="@/img/About Me.png" alt="man photo" />
        </div>
        <div class="right">
          <h2 class="text-3xl font-medium">About</h2>
          <h2 class="text-[62px] font-bold mb-8 mt-2.5">About Me</h2>
          <p class="w-[810px] text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque.
            <br /><br />
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis
            consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
            mi a, euismod risus r.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import Header from "../../components/Header/Header.vue";
export default {
  name: "AboutView",
  components: {
    Header,
  },
};
</script>
<style lang="css" scoped></style>
