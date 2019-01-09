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

<script>
export default {
  props: ['title', 'placeholder', 'value']
}
</script>

<style scoped>
::-webkit-input-placeholder {
  color: #c6d0eb;
}
::-moz-placeholder {
  color: #c6d0eb;
}
:-ms-input-placeholder {
  color: #c6d0eb;
}
:-moz-placeholder {
  color: #c6d0eb;
}

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

input {
  display: block;
  margin-top: 5px;
  width: 100%;
  border: 1px solid rgb(198, 208, 235);
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
  color: #205284;
  appearance: none;
  outline: 0;
  overflow: hidden;
}
</style>
