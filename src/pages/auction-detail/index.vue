<template>
  <div class="container">
    <div class="header flex justify-between items-center">
      <div class="icon-circle">
        <van-icon color="black" name="arrow-left" />
      </div>
      <div class="icon-circle">
        <van-icon color="black" name="star" />
      </div>
    </div>
    <div>
      <van-image
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      ></van-image>
    </div>
    <div class="content">
      <h2>Hachiman no Hogo</h2>
      <p>Tosei-gusoku Samurai Armour</p>
      <div class="badge">#0123</div>
      <div class="stars">
        <van-rate color="#000" :model-value="3"></van-rate>
      </div>
      <div class="timer">01:36:18</div>

      <div class="images flex justify-between">
        <div class="image" v-for="i in 4" :key="i"></div>
      </div>

      <button class="bid-button">Place a Bid</button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.container {
  background-color: #f0f0f0;
  width: 300px;
  margin: 20px auto;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.header {
  margin-bottom: 16px;
}

.icon-circle {
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}

.content {
  color: #333;
}

h2 {
  font-size: 20px;
  margin: 8px 0;
  font-weight: bold;
}

p {
  font-size: 14px;
  margin-bottom: 8px;
}

.badge {
  display: inline-block;
  background-color: black;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 8px;
}

.stars {
  margin: 8px 0;
}

.timer {
  font-size: 24px;
  margin: 8px 0;
  font-weight: bold;
}

.images {
  margin: 16px 0;
}

.image {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 4px;
  margin-right: 8px;
}

.bid-button {
  background-color: black;
  color: white;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
}
</style>