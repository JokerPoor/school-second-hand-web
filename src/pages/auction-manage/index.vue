<template>
  <div class="collection">
    <div class="flex justify-between items-center pt-2 pb-4 px-4">
      <i class="iconfont icon-back" @click="() => $router.go(-1)"></i>
      <span>Auction Manage</span>
      <van-button round size="mini">
        <i class="iconfont icon-search"></i>
      </van-button>
    </div>
    <van-swipe-cell class="mb-2" v-for="item in auctionsList" :key="item">
      <div class="bg-white text-black rounded-2xl">
        <div class="flex justify-between px-4 mb-3 pt-1">
          <span class="font-extrabold text-2xl"> {{ item.title }} </span>
          <div>
            <van-tag round plain type="primary">{{ item.status }}</van-tag>
            <van-tag class="ml-2" round plain type="primary">{{ item.paymentStatus }}</van-tag>
          </div>
        </div>
        <div class="px-2 flex items-center justify-between">
          <div>
            <i class="iconfont icon-calendar"></i>
            <span>{{ item.startTime }} ~ {{ item.endTime }}</span>
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
    <van-button block @click="!isNoData && getAuctionsList()">{{ isNoData ? '没有更多数据了' : '加载更多' }}</van-button>
  </div>
</template>

<script setup lang="ts">
import { getAdminAuctionControllerAdminAuction, I_AdminAuctionVO } from "@/apis/adminAuctionOpr";
import { useRouter } from "vue-router";

const router = useRouter();

const pageQuery = ref({
  pageIndex: 0,
  pageSize: 10
})

const isNoData = ref(false)

const auctionsList = ref<I_AdminAuctionVO[]>([]);

// 加载拍卖品数据
function getAuctionsList() {
  pageQuery.value.pageIndex++
  getAdminAuctionControllerAdminAuction({
    data: pageQuery.value
  }).then(result => {
    auctionsList.value = auctionsList.value.concat(result.data.list)
    if (result.data.total === auctionsList.value.length) {
      isNoData.value = true;
    }
  })
}

// 点击查看详情
function auctionClickHandle() {
  router.push({
    name: "AuctionDetail",
  });
}

function initData() {
  getAuctionsList()
}

initData()
</script>

<style scoped lang="scss"></style>