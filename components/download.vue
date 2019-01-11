<template>
  <transition name="fade">
    <div id="download" v-if="selectedCard.length > 0">
      <p>您已选择 {{ selectedCard.length }} 个项目</p>
    </div>
  </transition>
</template>
<script>
export default {
  props: ['selectedCard']
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

div#download {
  display: block;
  position: fixed;
  right: 0;
  bottom: 30px;
  left: 0;
  height: 50px;
  width: 90%;
  max-width: 300px;
  margin: auto;
  background: linear-gradient(
    104.74deg,
    rgb(176, 30, 255) 0%,
    rgb(225, 70, 124) 100%
  );
  border-radius: 50px;
  box-shadow: rgba(198, 208, 235, 0.5) 0px 5px 15px;
  z-index: 8;
}

p {
  display: block;
  width: 85%;
  margin: auto;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  color: #fff;
  text-align: center;
}
</style>
