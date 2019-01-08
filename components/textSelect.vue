<template>
  <div class="text-input">
    <span>{{ title }}</span>
    <select name id>
      <option disabled selected>- 请选择 -</option>
      <option v-for="e in entity" :key="e.value" :value="e.value">{{ e.title }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['title', 'entity']
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

select {
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
  background: transparent;
  overflow: hidden;
}
</style>
