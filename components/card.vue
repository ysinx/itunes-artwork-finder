<template>
  <div
    class="card"
    :class="{ clicked: clickedStatus(), notSelected: selectedCard.length > 0 && !clicked }"
  >
    <!-- 图片容器 -->
    <div
      class="card-img-container"
      :class="{
        movie: src.kind === 'feature-movie',
        macsoftware: src.kind === 'mac-software',
        loaded: loaded, failed: failed
      }"
    >
      <p class="card-img-failed" v-if="failed">加载失败</p>
      <img
        :src="reloadSrc"
        class="card-img"
        @load="loaded = true"
        @error="failed = true"
        @click.self.stop="select()"
        :class="{ loaded: loaded, failed: failed }"
      >

      <!-- 分辨率选项 -->
      <div class="card-img-capsule">
        <div>
          <span class="helper"></span>
          <p :class="{ selected: src.ratio === 0 }" @click.self.stop="selectRatio(0)">低清</p>
          <p :class="{ selected: src.ratio === 1 }" @click.self.stop="selectRatio(1)">标清</p>
          <p :class="{ selected: src.ratio === 2 }" @click.self.stop="selectRatio(2)">高清</p>
        </div>
      </div>
    </div>

    <!-- 图片描述 -->
    <p class="card-img-title">{{ src.trackName ? src.trackName : src.collectionName }}</p>
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
    },
    selectRatio(ratio) {}
  }
}
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

/* 图片容器 */

div.card-img-container {
  display: block;
  height: 250px;
  width: 250px;
  background: #fff;
  transition: box-shadow 0.25s ease-in-out;
  border: 1px solid #fff;
  overflow: hidden;
}
div.card-img-container.movie {
  height: 375px;
}
div.card-img-container.macsoftware {
  background: transparent;
  border: 0;
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
  transition: all 0.25s ease-in-out;
}
img.card-img.loaded {
  opacity: 1;
}
img.card-img.failed {
  display: none;
}

/* 分辨率选项 */

div.card-img-capsule {
  display: block;
  position: absolute;
  height: 40px;
  width: 100%;
  padding: 0 15px;
  font-size: 0;
  background: #fff;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateY(40px);
  transition: all 0.25s ease-in-out;
  z-index: 8;
}
div.card-img-capsule > div {
  height: 100%;
  width: 100%;
}
div.card.clicked div.card-img-capsule {
  transform: translateY(0);
}

div.card-img-capsule p {
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  font-weight: 500;
  line-height: 2;
  width: 32%;
  color: rgb(156, 114, 248);
  background: #fff;
  border-radius: 30px;
}
div.card-img-capsule p.selected {
  color: #fff;
  background: linear-gradient(
    104.74deg,
    rgb(123, 66, 246) 0%,
    rgb(176, 30, 255) 100%
  );
}
div.card-img-capsule p + p {
  margin-left: 2%;
}

/* 图片描述 */
p.card-img-title {
  display: block;
  width: 200px;
  margin: 15px auto 0 auto;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: #fff;
}

@media screen and (max-width: 414px) {
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
    padding-top: 142.5%;
  }

  p.card-img-title {
    width: 95%;
    margin: 15px auto 0 auto;
  }
}
</style>
