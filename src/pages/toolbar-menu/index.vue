<template>
  <div class="toolbar-menu">
    <div class="toolbar-menu__content">
      <router-view v-slot="{ Component }" class="app-router-view">
        <transition :name="String($route.meta.transition ?? '')">
          <keep-alive :include="keepAliveRoutes">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <div class="relative toolbar-menu__footer">
      <add-auction class="absolute toolbar-menu__footer__add"></add-auction>
      <van-tabbar route>
        <van-tabbar-item replace to="/toolbar-menu/home">
          <template #icon="props">
            <i v-if="props.active" class="iconfont icon-home font-bold"></i>
            <i v-else class="iconfont icon-home-copy"></i>
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/toolbar-menu/chat">
          <template #icon="props">
            <i v-if="props.active" class="iconfont icon-chat font-bold"></i>
            <i v-else class="iconfont icon-chat-copy"></i>
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/toolbar-menu/collection">
          <template #icon="props">
            <i
              v-if="props.active"
              class="iconfont icon-collection font-bold"
            ></i>
            <i v-else class="iconfont icon-collection-copy"></i>
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/toolbar-menu/personal-center">
          <template #icon="props">
            <i v-if="props.active" class="iconfont icon-person font-bold"></i>
            <i v-else class="iconfont icon-person-copy"></i>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { keepAliveRoutes } from "@/router";
import AddAuction from "./add-auction/index.vue";
</script>

<style scoped lang="scss">
.toolbar-menu__content {
  min-height: calc(100vh - var(--van-tabbar-height));
  overflow: auto;
}

.toolbar-menu__footer {
  .toolbar-menu__footer__add {
    z-index: calc(var(--van-tabbar-z-index) + 1);
    top: calc(var(--van-tabbar-height) / -2);
    left: 50%;
    transform: translate(-50%);
  }
}
</style>