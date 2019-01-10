<template>
  <div id="side" :class="{ active: toggleStatus }">
    <i class="sidebar-toggle" @click.self.stop="$emit('toggleSidebar', false)"></i>
    <div id="side-container">
      <TextInput title="关键字" placeholder="例如：Daft Punk" v-model="project.name"/>
      <TextSelect title="类别" :data="entity" v-model="project.entity"/>
      <TextSelect title="国家 / 地区" :data="country" v-model="project.country"/>
      <button class="confirm" v-if="!isGettingData" @click.self.stop="search()">搜索</button>
      <button class="confirm" v-else disabled>
        <i></i>
      </button>
    </div>
    <footer>
      Dev by coder-ysj. Designed by TH3EE.
      <br>Already open source on
      <a
        href="https://github.com/coder-ysj/jayyan.net-itunes"
        target="_blank"
      >GitHub</a>.
      <br>Copyright © 2019 coder-ysj.
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

import entityJson from '../assets/entity.json'
import countryJson from '../assets/country.json'

import TextInput from './textInput.vue'
import TextSelect from './textSelect.vue'

export default Vue.extend({
  props: ['toggleStatus', 'itunesResult'],
  components: {
    TextInput,
    TextSelect
  },
  data() {
    return {
      project: {
        name: '',
        entity: '- 请选择 -',
        country: '- 请选择 -'
      },
      entity: entityJson,
      country: countryJson,
      isGettingData: false
    }
  },
  methods: {
    search() {
      if (!this.project.name) {
        alert('请输入关键字')
        return
      } else if (this.project.entity === '- 请选择 -') {
        alert('请选择类别')
        return
      } else if (this.project.country === '- 请选择 -') {
        alert('请选择国家 / 地区')
        return
      }

      // 刷新 UI
      this.isGettingData = true
      this.$emit('itunesResultCallback', null)

      // 获取 iTunes 数据
      axios
        .get('https://api.jayyan.net/itunes/list', {
          params: {
            name: this.project.name,
            country: this.project.country,
            entity: this.project.entity,
            limit: 50
          }
        })
        .then(response => {
          const res = response.data
          if (!res.results || res.results.length <= 0) {
            this.$emit('itunesResultCallback', [])
            this.isGettingData = false
            return
          }
          res.results.map(item => {
            if (item.artworkUrl100) {
              item.artworkUrl600 = item.artworkUrl100.replace(
                '100x100',
                '600x600'
              )
              item.artworkUrl10000 = item.artworkUrl100.replace(
                '100x100',
                '10000x10000'
              )
            }
          })
          this.isGettingData = false
          this.$emit('itunesResultCallback', res.results)
        })
        .catch(() => {
          this.isGettingData = false
        })
    }
  }
})
</script>

<style scoped>
div#side {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 350px;
  min-width: 320px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transform: translateX(0);
  padding: 30px 35px;
  color: rgb(198, 208, 235);
  background-color: rgba(4, 8, 37, 1);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
}
div#side.active {
  transform: translateX(0);
}

i.sidebar-toggle {
  cursor: pointer;
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  background: url('../static/close.svg') center no-repeat;
  background-size: 30px;
}

div#side-container {
  display: block;
  width: 100%;
  margin-top: -75px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
button.confirm {
  cursor: pointer;
  display: block;
  margin-top: 30px;
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 2;
  appearance: none;
  outline: 0;
  color: #fff;
  background: linear-gradient(
    104.74deg,
    rgb(176, 30, 255) 0%,
    rgb(225, 70, 124) 100%
  );
  overflow: hidden;
}
button.confirm > i {
  display: block;
  height: 32px;
  width: 32px;
  margin: auto;
  background: url('../static/loading.svg') center no-repeat;
  background-size: 22px;
  animation: spin 1s infinite linear;
}

footer {
  display: block;
  width: 100%;
  padding: 30px 35px;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 12px;
  line-height: 1.6;
  color: rgb(198, 208, 235);
  text-align: left;
}

a {
  font-weight: 500;
  color: rgb(156, 114, 248);
}

@media screen and (max-height: 550px) {
  div#side {
    display: block;
    min-height: auto;
  }

  div#side-container {
    margin-top: 0;
  }

  footer {
    position: relative;
    margin-top: 30px;
    padding: 0;
  }
}
@media screen and (max-width: 768px) {
  div#side {
    transform: translateX(-100%);
  }

  i.sidebar-toggle {
    display: block;
  }
}
@media screen and (max-width: 600px) {
  div#side {
    width: 100%;
  }
}
</style>
