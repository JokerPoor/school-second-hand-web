<template>
  <div class="collection">
    <div class="flex justify-between items-center pt-2 pb-4 px-4">
      <i class="iconfont icon-back" @click="() => $router.go(-1)"></i>
      <span>Auction Manage</span>
      <van-button round size="mini">
        <i class="iconfont icon-search"></i>
      </van-button>
    </div>
    <van-swipe-cell class="mb-2" v-for="item in 10" :key="item">
      <div class="bg-white text-black rounded-2xl">
        <div class="flex justify-between px-4 mb-3 pt-1">
          <span class="font-extrabold text-2xl"> Auction Name </span>
          <div>
            <van-tag round plain type="primary">已支付</van-tag>
            <van-tag class="ml-2" round plain type="primary">已售</van-tag>
          </div>
        </div>
        <div class="px-2 flex items-center justify-between">
          <div>
            <i class="iconfont icon-calendar"></i>
            <span>2024/11/25 14:56:56 ~ 2024/11/25 14:56:56</span>
          </div>
          <i class="iconfont icon-eye" @click="auctionClickHandle"></i>
        </div>
      </div>
      <template #right>
        <div class="h-full px-2 flex items-center">
          <van-button round>封禁</van-button>
          <van-button round>删除</van-button>
        </div>
      </template>
    </van-swipe-cell>
  </div>
</template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function auctionClickHandle() {
  router.push({
    name: "AuctionDetail",
  });
}
</script>
  
  <style scoped lang="scss">
</style>