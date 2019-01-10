<template>
  <div class="card">
    <div
      class="card-img-container"
      :class="{ movie: src.kind === 'feature-movie', loaded: loaded }"
    >
      <img
        :src="src.artworkUrl600"
        class="card-img"
        @load="loaded = true"
        :class="{ loaded: loaded }"
      >
    </div>
    <p class="card-img-title">{{ src.trackName ? src.trackName : src.collectionName }}</p>
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
  vertical-align: top;
  margin: 15px 15px 30px 15px;
}

div.card-img-container {
  display: block;
  height: 200px;
  width: 200px;
  background: #fff;
  transition: box-shadow 0.25s ease-in-out;
  box-shadow: rgba(198, 208, 235, 0.75) 15px 15px 10px;
}
div.card-img-container.movie {
  height: 300px;
}
div.card-img-container.loaded {
  box-shadow: none;
}

img.card-img {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
}
img.card-img.loaded {
  opacity: 1;
}

p.card-img-title {
  display: block;
  width: 200px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: #404040;
}

@media screen and (max-width: 600px) {
  div.card {
    display: block;
    margin-bottom: 45px;
  }

  div.card-img-container {
    display: block;
    margin: auto;
    width: 95%;
    padding-top: 95%;
  }
  div.card-img-container.movie {
    padding-top: 142.5%;
  }

  p.card-img-title {
    width: 95%;
    margin: 15px auto 0 auto;
  }
}
</style>
