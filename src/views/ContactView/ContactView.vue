<template >
    <div class="py-[150px]">
        <div class="container mx-auto">
            <div class="flex flex-col items-center font-[Roboto]">
                <h2 class="text-2xl font-medium mb-[22px]">Get In Touch</h2>
                <h2 class="text-[48px] font-bold mb-7">Contact me</h2>
                <p class="text-2xl mb-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <form action="#">
                    <div class="flex gap-7">
                        <div class="flex flex-col ">
                            <h2 class="text-xl mb-2">First name</h2>
                            <input type="text"
                                class="border w-[480px] h-[60px] flex-grow px-5 rounded-lg ring-1 active:ring-[#5E3BEE]">
                        </div>
                        <div class="flex flex-col">
                            <h2 class="text-xl mb-2">Last name</h2>
                            <input type="text"
                                class="border w-[480px] h-[60px] flex-grow px-5 rounded-lg ring-1 active:ring-[#5E3BEE]">
                        </div>
                    </div>
                    <div class="flex gap-7 my-7">
                        <div class="flex flex-col ">
                            <h2 class="text-xl mb-2">Email</h2>
                            <input type="text"
                                class="border w-[480px] h-[60px] flex-grow px-5 rounded-lg ring-1 active:ring-[#5E3BEE]">

                        </div>
                        <div class="flex flex-col">
                            <h2 class="text-xl mb-2">Phone number</h2>
                            <input type="text"
                                class="border w-[480px] h-[60px] flex-grow px-5 rounded-lg ring-1 active:ring-[#5E3BEE]">
                        </div>
                    </div>
                    <div class="flex flex-col mb-7">
                        <h2 class="text-xl mb-2">Choose a topic</h2>
                        <select name="topic" id="" class="h-[60px] bg-white border rounded-lg ring-1 p-4 text-xl">
                            <option>Select one...</option>
                            <option value="">Job offer</option>
                            <option value="">Want to order</option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div class="flex flex-col mb-7">
                        <h2 class="text-xl mb-2">Message</h2>
                        <input type="text"
                            class="border w-full h-[240px] flex-grow px-5 rounded-lg ring-1 active:ring-[#5E3BEE]"
                            placeholder="Type your message">
                    </div>
                    <div class="flex mb-8">
                        <input type="checkbox">
                        <p class="ml-2">I accept the terms</p>
                    </div>
                    <button type="submit" class="text-white text-xl p-4 w-[160px] bg-[#E62872] rounded-lg hover:bg-[#5E3BEE] duration-200">Send me</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "ContactView"
}
</script>
<style lang="css" scoped>
.border {
    border: 1px solid #5E3BEE !important;
}</style>