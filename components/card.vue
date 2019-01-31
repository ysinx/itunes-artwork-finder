<template>
  <div
    class="card"
    :class="{
      clicked: src.ratio >= 0,
      notSelected: selectedCard > 0 && src.ratio === null
    }"
  >
    <!-- 图片容器 -->
    <div
      class="card-img-container"
      :class="{
        movie: src.kind === 'feature-movie',
        macsoftware: src.kind === 'mac-software',
        loaded: loaded,
        failed: failed
      }"
    >
      <p class="card-img-failed" v-if="failed">加载失败</p>
      <img
        :src="reloadSrc"
        class="card-img"
        @load="loaded = true"
        @error="failed = true"
        @click.self.stop="reload()"
        :class="{ loaded: loaded, failed: failed }"
      >
    </div>
    <div class="card-content-container">
      <!-- 图片描述 -->
      <p class="card-img-title">{{ src.trackName ? src.trackName : src.collectionName }}</p>
      <!-- 分辨率选项 -->
      <div class="card-img-ratio">
        <p :class="{ selected: src.ratio === 0 }" @click.self.stop="selectRatio(0)">标清 (100x100)</p>
        <p :class="{ selected: src.ratio === 1 }" @click.self.stop="selectRatio(1)">高清 (512x512)</p>
        <p :class="{ selected: src.ratio === 2 }" @click.self.stop="selectRatio(2)">超清 (9600x9600)</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['src', 'selectedCard'],
  data() {
    return {
      rawSrc: this.$props.src.artworkUrl512,
      reloadSrc: '',
      loaded: false,
      failed: false
    }
  },
  created() {
    this.reloadSrc = this.rawSrc
  },
  methods: {
    reload() {
      if (this.failed === true) {
        this.failed = false
        this.reloadSrc = this.rawSrc + '?h=' + new Date().getTime()
        return
      }
    },
    selectRatio(ratio) {
      this.$emit('selectRatio', ratio)
    }
  }
}
</script>
<style scoped>
div.card {
  display: inline-block;
  vertical-align: top;
  margin: 15px 15px 30px 15px;
  padding: 30px;
  background: rgba(4, 8, 37, 0.8);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px;
  transition: opacity 0.25s ease-in-out;
  font-size: 0;
  overflow: hidden;
}
div.card.clicked {
  z-index: 8;
}
div.card.notSelected {
  opacity: 0.25;
}

/* 图片容器 */
div.card-img-container {
  display: inline-block;
  vertical-align: top;
  height: 150px;
  width: 150px;
  background: #fff;
  overflow: hidden;
}
div.card-img-container.movie {
  height: 225px;
}
div.card-img-container.macsoftware {
  background: transparent;
  border: 0;
}
div.card-img-container.failed {
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
  transition: all 0.25s ease-in-out;
}
img.card-img.loaded {
  opacity: 1;
}
img.card-img.failed {
  display: none;
}

/* 右 */
div.card-content-container {
  display: inline-block;
  vertical-align: top;
  margin-left: 25px;
  width: 200px;
}

/* 图片描述 */
p.card-img-title {
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: #fff;
}

/* 分辨率选项 */
div.card-img-ratio {
  display: block;
  width: 100%;
  margin-top: 15px;
}

div.card-img-ratio p {
  cursor: pointer;
  display: block;
  font-size: 15px;
  font-weight: 500;
  line-height: 2.5;
  border-radius: 8px;
  color: rgb(198, 208, 235);
}
div.card-img-ratio p.selected {
  color: #fff;
  background: linear-gradient(
    104.74deg,
    rgb(123, 66, 246) 0%,
    rgb(176, 30, 255) 100%
  );
}
div.card-img-ratio p + p {
  margin-top: 5px;
}

@media screen and (max-width: 550px) {
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
  div.card-img-container.movie {
    padding-top: 150%;
  }

  div.card-content-container {
    width: 90%;
    margin: 30px auto 0 auto;
  }
  p.card-img-title {
    width: 100%;
  }
  div.card-img-ratio {
    margin-top: 20px;
  }
}
</style>
