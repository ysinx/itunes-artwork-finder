<template>
  <div class="text-input" :class="{ dark: store_theme === 1 }">
    <label for="text-input">
      {{ title }}
      <input
        type="text"
        :placeholder="placeholder"
        :class="{ dark: store_theme === 1 }"
        :value="value"
        name="text-input"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: ['title', 'placeholder', 'value'],
  computed: mapState({
    store_theme: state => state.theme
  })
}
</script>
<style scoped>
::-webkit-input-placeholder {
  color: rgb(32, 82, 132);
}
::-moz-placeholder {
  color: rgb(32, 82, 132);
}
:-ms-input-placeholder {
  color: rgb(32, 82, 132);
}
:-moz-placeholder {
  color: rgb(32, 82, 132);
}

div.text-input {
  display: block;
  margin-top: 15px;
  width: 100%;
}

label {
  display: block;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
  text-align: left;
  transition: all 0.3s ease-in-out;
}
input {
  display: block;
  margin-top: 10px;
  width: 100%;
  border: 1px solid rgb(198, 208, 235);
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
  color: #000;
  background: #fff;
  appearance: none;
  outline: 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

/* 黑暗模式 */
.dark::-webkit-input-placeholder {
  color: rgb(198, 208, 235);
}
.dark::-moz-placeholder {
  color: rgb(198, 208, 235);
}
.dark:-ms-input-placeholder {
  color: rgb(198, 208, 235);
}
.dark:-moz-placeholder {
  color: rgb(198, 208, 235);
}

div.text-input.dark label {
  color: rgb(198, 208, 235);
}

div.text-input.dark input {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
  background-color: rgba(4, 8, 37, 0.8);
}
</style>
