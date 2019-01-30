<template>
  <div class="text-input">
    <label for="text-input">
      {{ title }}
      <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        name="text-input"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  </div>
</template>
<script>
export default {
  props: ['title', 'placeholder', 'value']
}
</script>
<style scoped>
::-webkit-input-placeholder {
  color: rgb(198, 208, 235);
}
::-moz-placeholder {
  color: rgb(198, 208, 235);
}
:-ms-input-placeholder {
  color: rgb(198, 208, 235);
}
:-moz-placeholder {
  color: rgb(198, 208, 235);
}

div.text-input {
  display: block;
  margin-top: 15px;
  width: 100%;
}

label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  line-height: 2;
  text-align: left;
}

input {
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
  overflow: hidden;
}
</style>
