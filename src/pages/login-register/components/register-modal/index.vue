<template>
  <div class="register-modal flex flex-col items-center">
    <div class="register-title font-bold text-4xl">Create</div>
    <div class="register-title font-bold text-4xl">an Account</div>

    <register-page-avator-svg class="mt-2" />

    <div class="w-10/12 border-2 border-black p-2 rounded-lg mt-10">
      <i class="iconfont icon-GitHub"></i
      ><span class="ml-2">Continue with Github</span>
    </div>

    <van-divider class="w-11/12">or</van-divider>

    <div class="w-10/12 border-2 border-black p-2 rounded-lg">
      <i class="iconfont icon-email"></i
      ><span class="ml-2">Sign Up with Email</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegisterPageAvatorSvg from "@/assets/svg/register-page-avator.svg";
</script>

<style scoped lang="scss">
.register-modal {
  .register-title {
    font-family: "Caveat", cursive;
    font-optical-sizing: auto;
  }
}
</style>