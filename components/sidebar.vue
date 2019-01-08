<template>
  <div id="side"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
div#side {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 350px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 30px 15px;
  border-right: 1px solid #dbdfe1;
  overflow: hidden;
}
</style>
