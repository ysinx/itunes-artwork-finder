<template>
  <div class="toggle" @click.self.stop="toggleTheme()"></div>
</template>
<script>
export default {
  methods: {
    toggleTheme() {
      const themeStatus = this.$store.state.theme
      if (themeStatus === 0) {
        this.$store.commit('changeTheme', 1)
        return
      }
      this.$store.commit('changeTheme', 0)
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
  bottom: 30px;
  left: 30px;
  background: red;
  border: 0;
  border-radius: 50%;
  z-index: 9;
}
</style>

