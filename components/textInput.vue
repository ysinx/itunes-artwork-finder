<template>
  <div class="text-input">
    <span>{{ title }}</span>
    <input
      type="text"
      :placeholder="placeholder"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['title', 'placeholder', 'value']
})
</script>

<style scoped>
div.text-input {
  display: block;
  width: 100%;
}

div.text-input + div {
  margin-top: 15px;
}

span {
  display: block;
  font-size: 14px;
  font-weight: bold;
  line-height: 2;
  text-align: left;
}

input {
  display: block;
  margin-top: 3px;
  width: 100%;
  border: 1px solid #dbdfe1;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 15px;
  line-height: 2;
  appearance: none;
  outline: 0;
  overflow: hidden;
}
</style>
