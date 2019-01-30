<template>
  <transition name="fade">
    <div id="download" v-if="selectedCard > 0">
      <button @click.self.stop="download()"></button>
      <button @click.self.stop="$emit('clearSelectedCard')"></button>
    </div>
  </transition>
</template>
<script>
export default {
  props: ['itunesResult', 'selectedCard'],
  methods: {
    download() {
      if (this.$props.selectedCard <= 0) return
      if (this.$props.selectedCard.length > 1) {
        alert('暂未开放多选下载功能')
        return
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
  right: 30px;
  bottom: 30px;
  margin: auto;
  font-size: 0;
  text-align: center;
  z-index: 8;
}

button {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  height: 50px;
  width: 50px;
  background: url('~static/confirm.svg') #fff center no-repeat;
  background-size: 30px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px;
}
button + button {
  margin-left: 15px;
  background-image: url('~static/clear.svg');
}
</style>
