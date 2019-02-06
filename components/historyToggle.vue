<template>
  <div class="toggle" :class="{ dark: store_theme === 1 }">
    <label for="toggle">
      <input type="checkbox" v-model="store_history" :class="{ selected: store_history }">
      <span>{{ title }}</span>
    </label>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: ['title'],
  computed: {
    store_theme: {
      get() {
        return this.$store.state.theme
      }
    },
    store_history: {
      get() {
        return this.$store.state.history
      },
      set() {
        this.$store.commit('changeHistory', !this.$store.state.history)
      }
    }
  }
}
</script>
<style scoped>
div.toggle {
  display: block;
  margin: 15px 0;
  user-select: none;
  text-align: right;
}

label {
  font-size: 0;
}

span {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  padding-left: 5px;
  color: rgb(32, 82, 132);
  transition: color 0.3s ease-in-out;
}

input {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  width: 18px;
  border: 1px solid rgb(198, 208, 235);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  appearance: none;
  outline: 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
input.selected:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  background: rgb(156, 114, 248);
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
}

/* 黑暗模式 */
div.toggle.dark span {
  color: rgb(198, 208, 235);
}

div.toggle.dark input {
  border-color: rgba(255, 255, 255, 0.15);
}
</style>
