<template>
  <div class="text-input">
    <span>{{ title }}</span>
    <select :value="value" v-on:input="$emit('input', $event.target.value)">
      <option disabled selected>- 请选择 -</option>
      <option v-for="(value, key) in data[0]" :key="key" :value="key">{{ value }}</option>
    </select>
    <i></i>
  </div>
</template>
<script>
export default {
  props: ['title', 'data', 'value']
}
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
  font-size: 18px;
  font-weight: bold;
  line-height: 2;
  text-align: left;
}

select {
  display: block;
  margin-top: 5px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 500;
  line-height: 2;
  color: #fff;
  background: rgba(255, 255, 255, 0.15);
  appearance: none;
  outline: 0;
  overflow: hidden;
}
</style>
