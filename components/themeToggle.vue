<template>
  <div class="toggle" :class="{ dark: $store.state.theme === 1 }" @click.self.stop="toggleTheme()"></div>
</template>
<script>
export default {
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
    toggleTheme() {
      const themeStatus = this.$store.state.theme
      if (themeStatus === 0) {
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
  display: block;
  height: 50px;
  width: 50px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  background: url('~static/moon.svg') rgb(198, 208, 235) center no-repeat;
  background-size: 25px;
  border: 0;
  border-radius: 50%;
  z-index: 9;
}
div.toggle.dark {
  background-color: rgb(32, 82, 132);
}
</style>

