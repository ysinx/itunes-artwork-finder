<template>
  <transition name="fade">
    <div id="download" v-if="selectedCard > 0">
      <span class="helper"></span>
      <button>下载</button>
      <button @click.self.stop="$emit('clearSelectedCard')">清除</button>
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
  bottom: 15px;
  left: 0;
  height: 80px;
  min-width: 320px;
  width: 100%;
  margin: auto;
  font-size: 0;
  text-align: center;
  z-index: 8;
}

button {
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  padding: 0 45px;
  color: #fff;
  background: linear-gradient(
    104.74deg,
    rgb(137, 1, 190) 0%,
    rgb(53, 52, 255) 100%
  );
  border-radius: 40px;
}
button + button {
  margin-left: 15px;
  background: linear-gradient(
    104.74deg,
    rgb(30, 22, 163) 0%,
    rgb(126, 66, 112) 100%
  );
}

@media screen and (max-width: 500px) {
  div#download {
    height: 60px;
  }
}
</style>
