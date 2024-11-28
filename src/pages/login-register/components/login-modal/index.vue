<template>
  <div class="login-modal flex flex-col items-center">
    <div class="font-bold text-4xl">Welcome back!</div>

    <login-page-avator-svg class="mt-2" />

    <div>
      <van-field
        v-model="username"
        label="username"
        class="border-2 border-black rounded-lg mt-10"
        @keydown.enter="onSubmit"
      />
      <van-field
        v-model="password"
        label="password"
        :type="passwordType"
        class="border-2 border-black rounded-lg mt-4"
        :right-icon="passwordType === 'password' ? 'eye-o' : 'closed-eye'"
        @click-right-icon="passwordClickRightIcon"
        @keydown.enter="onSubmit"
      />
    </div>

    <van-divider class="w-11/12">or</van-divider>

    <div class="w-1/2 flex gap-6">
      <van-button type="primary">
        <i class="iconfont icon-email"></i>
      </van-button>

      <van-button type="primary">
        <i class="iconfont icon-github"></i>
      </van-button>
    </div>

    <div class="text-align text-black mt-6 mb-24">
      Don't have an account?
      <span class="font-bold" @click="registerHandle">Sign up</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import useRegisterHook from "../../hooks/useRegister";
import LoginPageAvatorSvg from "@/assets/svg/login-page-avator.svg";
import { closeAxiosLoading, openAxiosLoading } from "@/hooks/useAxiosLoading";
import { FieldType } from "vant";
import router from "@/router/index";

const props = withDefaults(
  defineProps<{
    close: () => void;
  }>(),
  {}
);

const { openRegisterModal } = useRegisterHook();

function registerHandle() {
  openRegisterModal();
  props.close();
}

const passwordType = ref<FieldType>("password");

function passwordClickRightIcon() {
  passwordType.value = passwordType.value === "password" ? "text" : "password";
}

const username = ref("");

const password = ref("");

function onSubmit() {
  openAxiosLoading();
  setTimeout(() => {
    closeAxiosLoading();
    router.replace({
      name: "Home",
    });
    props.close();
  }, 3000);
}
</script>

<style scoped lang="scss">
</style>