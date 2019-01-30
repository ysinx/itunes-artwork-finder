<template>
  <transition name="fade">
    <div id="download" v-if="selectedCard > 0">
      <p>您已选择 {{ selectedCard > 9 ? '9+' : selectedCard }} 个项目</p>
      <i @click.self.stop="$emit('clearSelectedCard')"></i>
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
  bottom: 0;
  left: 0;
  height: 80px;
  min-width: 320px;
  width: 100%;
  margin: auto;
  background: linear-gradient(
    104.74deg,
    rgb(176, 30, 255) 0%,
    rgb(225, 70, 124) 100%
  );
  z-index: 8;
}

p {
  display: block;
  width: calc(100% - 113px);
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
  line-height: 80px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

i {
  display: block;
  height: 30px;
  width: 30px;
  position: absolute;
  top: calc(50% - 15px);
  right: 23px;
  border: 0;
  background: url('~static/close-fill.svg') center no-repeat;
  background-size: 100%;
}

@media screen and (max-width: 500px) {
  div#download {
    height: 60px;
  }

  p {
    line-height: 60px;
  }
}
</style>
