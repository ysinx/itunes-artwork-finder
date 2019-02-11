<template>
  <div class="text-select" :class="{ dark: store_theme === 1 }">
    <label for="text-select">
      {{ title }}
      <select
        name="text-select"
        :value="value"
        :class="{ unselected: value === data.placeholder }"
        v-on:input="$emit('input', $event.target.value)"
      >
        <option disabled selected>{{ data.placeholder }}</option>
        <option v-for="(value, key) in data.list" :key="key" :value="key">{{ value }}</option>
      </select>
    </label>
    <i></i>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: ['title', 'data', 'value'],
  computed: mapState({
    store_theme: state => state.theme
  })
}
</script>
<style scoped>
div.text-select {
  display: block;
  width: 100%;
}
div.text-select + div {
  margin-top: 15px;
}

label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  line-height: 2;
  color: #000;
  text-align: left;
}

select {
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
}
select.unselected {
  color: rgb(32, 82, 132);
}

/* 黑暗模式 */
div.text-select.dark label {
  color: rgb(198, 208, 235);
}

div.text-select.dark select {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  background: rgba(4, 8, 37, 0.8);
}
div.text-select.dark select.unselected {
  color: rgb(198, 208, 235);
}
</style>
