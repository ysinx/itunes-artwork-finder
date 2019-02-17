<template>
  <div id="__nuxt_page" v-if="isLoad">
    <nuxt/>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    store_theme: 'theme'
  }),
  head() {
    return {
      bodyAttrs: {
        class: this.store_theme === 1 ? 'dark' : ''
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  mounted() {
    const themeConfig = localStorage['theme']
    const localeConfig = localStorage['locale']

    this.$store.commit(
      'CHANGE_LOCALE',
      localeConfig && localeConfig === 'en' ? 'en' : 'cn'
    )
    this.$i18n.locale = this.$store.state.locale

    if (themeConfig && themeConfig !== 'day') {
      document.body.className += 'dark'
      this.$store.commit('CHANGE_THEME', 1)
      localStorage.setItem('theme', 'night')
      this.isLoad = true
      return
    }

    this.$store.commit('CHANGE_THEME', 0)
    localStorage.setItem('theme', 'day')
    this.isLoad = true
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: 0;
  position: relative;
  box-sizing: border-box;
}

img {
  border: 0;
  display: block;
}

div,
p,
span,
a {
  hyphens: auto;
  overflow-wrap: break-word;
  text-decoration: none;
  white-space: normal;
  word-wrap: break-word;
}

body {
  font-family: PingFangSC, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Ubuntu, Helvetica Neue, sans-serif;
  color: rgb(32, 82, 132);
  background: #fff;
  width: 100%;
  min-width: 320px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
body.dark {
  background-color: rgb(33, 44, 79);
}

div#__nuxt_page {
  min-height: 100vh;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

span.helper {
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 0;
  font-size: 0;
}
</style>
