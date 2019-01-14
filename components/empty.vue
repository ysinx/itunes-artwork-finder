<template>
  <div class="empty">
    <i class="empty" v-if="!itunesResult"></i>
    <i class="empty zero" v-else-if="itunesResult && itunesResult.length <= 0"></i>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props: ['itunesResult']
}
</script>
<style scoped>
div.empty {
  display: block;
  height: 100vh;
  width: 100%;
}

i.empty {
  display: block;
  height: 100%;
  width: 100%;
  background: url('../static/filesearch.svg') center no-repeat;
  background-size: 100px;
}
i.empty.zero {
  background-image: url('../static/frown.svg');
}

@media screen and (max-width: 768px) {
  div.empty {
    height: calc(100vh - 60px);
  }
}
</style>
