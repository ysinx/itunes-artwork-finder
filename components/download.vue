<template>
  <transition name="fade">
    <div id="download" v-if="selectedCard.length > 0" @click.stop="chooseMenu()">
      <p>您已选择 {{ selectedCard.length > 9 ? '9+' : selectedCard.length }} 个项目</p>
      <i @click.self.stop="$emit('clearSelectedCard')"></i>
      <!-- <div id="download-list"></div> -->
    </div>
  </transition>
</template>
<script>
export default {
  props: ['selectedCard'],
  methods: {
    chooseMenu() {
      console.log('Choose Menu.')
    }
  }
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
  cursor: pointer;
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
  transform: translateX(175px);
  border-radius: 50px;
  box-shadow: rgba(198, 208, 235, 0.5) 0px 5px 15px;
  z-index: 8;
}

p {
  display: block;
  width: calc(100% - 100px);
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  color: #fff;
}

i {
  display: block;
  height: 34px;
  width: 34px;
  position: absolute;
  top: 8px;
  right: 8px;
  border: 0;
  background: url('../static/close-fill.svg') center no-repeat;
  background-size: 100%;
}

div#download-list {
  display: block;
  height: 100px;
  width: calc(100% - 50px);
  position: absolute;
  right: 25px;
  bottom: 50px;
  background: red;
  z-index: 7;
}

@media screen and (max-width: 768px) {
  div#download {
    transform: translateX(0);
  }
}
</style>
