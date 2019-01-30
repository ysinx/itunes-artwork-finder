<template>
  <div class="empty">
    <i class="empty"></i>
  </div>
</template>
<script>
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
  background: url('~static/frown.svg') center no-repeat;
  background-size: 100px;
}

@media screen and (max-width: 768px) {
  div.empty {
    height: calc(100vh - 60px);
  }
}
</style>
