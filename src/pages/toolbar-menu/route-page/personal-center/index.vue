<template>
  <div class="personal-center">
    <div class="flex justify-end m-6">
      <i class="iconfont icon-logout"></i>
    </div>

    <div class="flex ml-6">
      <van-image
        round
        width="4rem"
        height="4rem"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
        <template v-slot:error>加载失败</template>
      </van-image>

      <div class="flex-1 ml-2">
        <p class="font-extrabold text-2xl">Rintola</p>

        <p>The djkad adhfaa sd</p>

        <div>
          <i class="iconfont icon-email mr-2"></i>
          <span>E-mail: 12546154512@163.com</span>
        </div>
      </div>
    </div>

    <div class="flex my-2">
      <div class="w-1/3 text-center">
        <p>88</p>
        <span>我已购买</span>
      </div>
      <div class="w-1/3 text-center">
        <p>56</p>
        <span>我的上架</span>
      </div>
      <div class="w-1/3 text-center">
        <p>999</p>
        <span>我的收藏</span>
      </div>
    </div>

    <div class="text-black flex flex-wrap justify-between">
      <div
        class="bg-white manage-module-item rounded-3xl flex justify-center items-center"
      >
        <div class="flex flex-col items-center">
          <i class="iconfont icon-organizations manage-module-item_icon"></i>
          <p>User</p>
        </div>
      </div>

      <div
        class="bg-white manage-module-item rounded-3xl flex justify-center items-center"
      >
        <div class="flex flex-col items-center">
          <i class="iconfont icon-comment manage-module-item_icon"></i>
          <p>Comments</p>
        </div>
      </div>

      <div
        class="bg-white manage-module-item rounded-3xl flex justify-center items-center"
      >
        <div class="flex flex-col items-center">
          <i class="iconfont icon-auction-line manage-module-item_icon"></i>
          <p>Auction</p>
        </div>
      </div>
    </div>
  </div>

  <p class="ml-2 my-6 font-extrabold text-2xl">Temporary</p>

  <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
    <div class="flex items-center flex-col">
      <div
        class="rounded-2xl bg-white text-black mb-2 w-80"
        v-for="item in list"
        :key="item"
      >
        <van-image
          fit="contain"
          width="20rem"
          height="10rem"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="h-10">
          <span>热卖</span>
          <span>00:52:00</span>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script setup lang="ts">
const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};
</script>

<style scoped lang="scss">
.manage-module-item {
  width: 44vw;
  aspect-ratio: 1 / 1;
  margin: 3vw;

  .manage-module-item_icon {
    font-size: 3rem;
  }
}
</style>