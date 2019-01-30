<template>
  <div class="text-select">
    <label for="text-select">
      {{ title }}
      <select
        name="text-select"
        :value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
        <option disabled selected>- 请选择 -</option>
        <option v-for="(value, key) in data[0]" :key="key" :value="key">{{ value }}</option>
      </select>
    </label>
    <i></i>
  </div>
</template>
<script>
export default {
  props: ['title', 'data', 'value']
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
  text-align: left;
}

select {
  display: block;
  margin-top: 10px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
  color: #fff;
  background: rgba(4, 8, 37, 0.8);
  appearance: none;
  outline: 0;
}
</style>
