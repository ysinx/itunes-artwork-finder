<template>
  <div class="toggle">
    <label for="toggle">
      <span>{{ title }}</span>
      <input type="checkbox" v-model="isHistoryEnabled" :class="{ selected: isHistoryEnabled }">
    </label>
  </div>
</template>
<script>
export default {
  props: ['title', 'status'],
  data() {
    return {
      isHistoryEnabled: this.$props.status
    }
  },
  watch: {
    status(val) {
      this.isHistoryEnabled = val
    }
  }
}
</script>
<style scoped>
div.toggle {
  display: block;
  float: right;
  margin: 20px 0;
  user-select: none;
}

label {
  cursor: pointer;
  font-size: 0;
}
span {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
}
input {
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  width: 18px;
  margin-left: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.15);
  appearance: none;
  outline: 0;
}
input.selected:after {
  content: '✓';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
}
</style>
