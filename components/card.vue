<template>
  <div
    class="card"
    :class="{ clicked: clickedStatus(), notSelected: selectedCard.length > 0 && !clicked }"
    @click.stop="select()"
  >
    <div
      class="card-img-container"
      :class="{ movie: src.kind === 'feature-movie', loaded: loaded, failed: failed }"
    >
      <p class="card-img-failed" v-if="failed">加载失败</p>
      <img
        :src="reloadSrc"
        class="card-img"
        @load="loaded = true"
        @error="failed = true"
        :class="{ loaded: loaded, failed: failed }"
      >
    </div>
    <p class="card-img-title">{{ src.name }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['src', 'selectedCard'],
  data() {
    return {
      rawSrc: this.$props.src.artworkUrl600,
      reloadSrc: '',
      loaded: false,
      failed: false,
      clicked: false
    }
  },
  created() {
    this.reloadSrc = this.rawSrc
  },
  methods: {
    clickedStatus() {
      if (this.$props.selectedCard.length <= 0) {
        this.clicked = false
        return
      }
      return this.clicked
    },
    select() {
      if (this.failed === true) {
        this.failed = false
        this.reloadSrc = this.rawSrc + '?h=' + new Date().getTime()
        return
      }
      this.clicked = !this.clicked
      this.$emit('selectCard', this.$props.src)
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
  transition: opacity 0.25s ease-in-out;
}
div.card.clicked {
  z-index: 8;
}
div.card.notSelected {
  opacity: 0.25;
}

div.card-img-container {
  display: block;
  height: 200px;
  width: 200px;
  background: #fff;
  transition: box-shadow 0.25s ease-in-out;
  box-shadow: rgba(198, 208, 235, 0.75) 5px 15px 10px;
}
div.card-img-container.movie {
  height: 300px;
}
div.card-img-container.loaded {
  box-shadow: none;
}
div.card-img-container.failed {
  box-shadow: none;
  background: linear-gradient(
    104.74deg,
    rgb(30, 22, 163) 0%,
    rgb(126, 66, 112) 100%
  );
  border-radius: 12px;
}

p.card-img-failed {
  display: block;
  width: 100%;
  position: absolute;
  top: calc(50% - 15px);
  right: 0;
  left: 0;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: #fff;
  text-align: center;
}

img.card-img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
}
img.card-img.loaded {
  opacity: 1;
}
img.card-img.failed {
  display: none;
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
