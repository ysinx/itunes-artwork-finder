<template>
  <div class="toggle" :class="{ dark: store_theme === 1 }" @click.stop="toggleTheme()">
    <div class="toggle-container">
      <i></i>
      <i></i>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    store_theme: state => state.theme
  }),
  beforeMount() {
    const themeConfig = localStorage['theme']

    if (themeConfig && themeConfig !== 'day') {
      localStorage.setItem('theme', 'night')
      this.$store.commit('changeTheme', 1)
      return
    }

    localStorage.setItem('theme', 'day')
  },
  methods: {
    // 主题切换
    toggleTheme() {
      if (this.store_theme === 0) {
        this.$store.commit('changeTheme', 1)
        localStorage.setItem('theme', 'night')
        return
      }

      this.$store.commit('changeTheme', 0)
      localStorage.setItem('theme', 'day')
    }
  }
}
</script>
<style scoped>
div.toggle {
  cursor: pointer;
  display: block;
  height: 50px;
  width: 50px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  background-color: rgb(198, 208, 235);
  border: 0;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;
  overflow: hidden;
  z-index: 9;
}

div.toggle-container {
  display: block;
  height: 50px;
  width: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  font-size: 0;
  transform: translateX(0);
  transition: all 0.3s ease-in-out;
}
div.toggle-container > i {
  display: inline-block;
  vertical-align: middle;
  height: 50px;
  width: 50px;
}
div.toggle-container > i:first-child {
  background: url('~static/moon.svg') center no-repeat;
  background-size: 25px;
}
div.toggle-container > i:nth-child(2) {
  background: url('~static/sun.svg') center no-repeat;
  background-size: 30px;
}

/* 夜间模式 */
div.toggle.dark {
  background-color: rgb(32, 82, 132);
}

div.toggle.dark div.toggle-container {
  transform: translateX(-50px);
}
</style>
