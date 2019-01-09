<template>
  <div class="empty"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
div.empty {
  display: block;
  height: 100vh;
  width: 100%;
  background: url('../static/filesearch.svg') center no-repeat;
  background-size: 100px;
}

@media screen and (max-width: 768px) {
  div.empty {
    height: calc(100vh - 60px);
  }
}
</style>
