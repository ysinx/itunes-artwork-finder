<template>
  <transition name="fade">
    <div class="scroll-top" v-if="scrollTop > 600" @click.stop="scrollToTop()">
      <i></i>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      scrollTop: null
    }
  },
  created() {
    this.scrollTop = this.getScrollTop()
    window.addEventListener('scroll', () => {
      this.scrollTop = this.getScrollTop()
    })
  },
  methods: {
    getScrollTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      )
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.scrollTop = 0
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

div.scroll-top {
  cursor: pointer;
  display: block;
  position: fixed;
  height: 50px;
  width: 50px;
  right: 30px;
  bottom: 100px;
  border-radius: 50%;
  border: 1px solid rgb(198, 208, 235);
  background: #fff;
  box-shadow: rgba(198, 208, 235, 0.5) 0px 5px 15px;
  z-index: 8;
}
div.scroll-top > i {
  display: block;
  height: 100%;
  width: 100%;
  background: url('../static/arrow-up.svg') center no-repeat;
  background-size: 30px;
}
</style>
