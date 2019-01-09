<template>
  <div class="card">
    <div class="card-img-container">
      <img :src="src" class="card-img" @load="loaded = true" :class="{ loaded: loaded }">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['src'],
  data() {
    return {
      loaded: false
    }
  }
})
</script>

<style scoped>
div.card {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  margin: 15px;
}

div.card-img-container {
  display: block;
  height: 200px;
  width: 200px;
  background: #fff;
}

img.card-img {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
  filter: drop-shadow(15px 15px 10px rgba(198, 208, 235, 0.75));
}
img.card-img.loaded {
  opacity: 1;
}

@media screen and (max-width: 600px) {
  div.card {
    display: block;
    margin-bottom: 45px;
  }

  div.card-img-container {
    display: block;
    margin: auto;
    width: 100%;
    padding-top: 100%;
  }
}
</style>
