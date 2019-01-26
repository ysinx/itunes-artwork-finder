<template>
  <div id="home">
    <div id="side">
      <TextSelect title="类别" :data="entity" v-model="project.entity"/>
      <TextSelect title="国家 / 地区" :data="country" v-model="project.country"/>
      <TextInput
        title="关键字"
        placeholder="例如：Daft Punk"
        v-model="project.name"
        @keyup.enter.native="search()"
      />
      <button class="confirm" v-if="!isGettingData" @click.self.stop="search()">搜索</button>
      <button class="confirm" v-else disabled>
        <i></i>
      </button>
      <footer>
        Dev by coder-ysj.
        <br>Already open source on
        <a
          href="https://github.com/coder-ysj/jayyan.net-itunes"
          target="_blank"
          rel="noopener"
        >GitHub</a>.
        <br>Copyright © 2019 coder-ysj.
      </footer>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

import entityJson from '../assets/entity.json'
import countryJson from '../assets/country.json'

import TextSelect from '../components/textSelect.vue'
import TextInput from '../components/textInput.vue'

export default {
  components: {
    TextSelect,
    TextInput
  },
  data() {
    return {
      entity: entityJson,
      country: countryJson,
      isGettingData: false,
      project: {
        name: null,
        entity: '- 请选择 -',
        country: '- 请选择 -'
      }
    }
  },
  // 检索历史搜索数据是否合法
  mounted() {
    let project

    try {
      project = JSON.parse(localStorage['history'])
    } catch {
      return
    }

    if (!this.verifyKey(entityJson, project.entity)) return
    if (!this.verifyKey(countryJson, project.country)) return
    this.project = project
  },
  methods: {
    search() {
      // 表单检验
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

      // 存储搜索对象
      localStorage.setItem('history', JSON.stringify(this.project))

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
          this.isGettingData = false
          this.$emit('itunesResultCallback', res.results)
        })
        .catch(() => {
          this.$emit('itunesResultCallback', [])
          this.isGettingData = false
        })
    },
    verifyKey(arr, key) {
      const json = arr[0]
      if (json[key] !== undefined) return true
      return false
    }
  }
}
</script>
<style>
div#home {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  min-width: 320px;
  padding: 30px;
  color: rgb(198, 208, 235);
  background-color: rgba(4, 8, 37, 1);
}

div#side {
  display: block;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
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
  margin-top: 30px;
  font-size: 12px;
  line-height: 1.6;
  color: rgb(198, 208, 235);
  text-align: left;
}

a {
  font-weight: 500;
  color: rgb(156, 114, 248);
}
</style>
