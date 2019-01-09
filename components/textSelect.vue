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
  font-size: 15px;
  font-weight: bold;
  line-height: 2;
  text-align: left;
}

select {
  display: block;
  margin-top: 5px;
  width: 100%;
  border: 1px solid rgb(198, 208, 235);
  border-radius: 6px;
  padding: 5px 44px 5px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
  color: #205284;
  appearance: none;
  outline: 0;
  background: transparent;
  overflow: hidden;
}
i {
  display: block;
  height: 44px;
  width: 44px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: url('../static/caret-down.svg') center no-repeat;
  background-size: 16px;
}
</style>
