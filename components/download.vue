<template>
  <transition name="fade">
    <div id="download" v-if="selectedCard.length > 0" @click.stop="chooseMenu()">
      <p>您已选择 {{ selectedCard.length > 9 ? '9+' : selectedCard.length }} 个项目</p>
      <i @click.self.stop="$emit('clearSelectedCard')"></i>
      <div id="download-list">
        <button @click.self.stop="download(9600)">原图下载（9600 x 9600）</button>
        <button @click.self.stop="download(512)">高清下载（512 x 512）</button>
        <button @click.self.stop="download(100)">标清下载（100 x 100）</button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ['selectedCard'],
  methods: {
    download(ratio) {
      if (this.$props.selectedCard.length <= 0) return
      if (this.$props.selectedCard.length > 1) {
        alert('暂未开放多选下载功能')
        return
      }
      switch (ratio) {
        case 100:
          window.open(this.$props.selectedCard[0].artworkUrl100)
          break
        case 512:
          window.open(this.$props.selectedCard[0].artworkUrl512)
          break
        case 9600:
          window.open(this.$props.selectedCard[0].artworkUrl9600)
          break
        default:
          window.open(this.$props.selectedCard[0].artworkUrl100)
          break
      }
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
  background: url('~static/close-fill.svg') center no-repeat;
  background-size: 100%;
}

div#download-list {
  display: block;
  width: calc(100% - 50px);
  position: absolute;
  right: 25px;
  bottom: 50px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: rgba(4, 8, 37, 1);
  z-index: 7;
}

div#download-list > button {
  cursor: pointer;
  display: block;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  line-height: 3;
  outline: 0;
  color: #fff;
  background: rgba(255, 255, 255, 0.15);
}
div#download-list > button + button {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

@media screen and (max-width: 768px) {
  div#download {
    transform: translateX(0);
  }
}
</style>
