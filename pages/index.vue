<template>
  <main id="home" :class="{ dark: $store.state.theme === 1 }">
    <div id="home-option">
      <TextSelect title="类别" :data="entity" v-model="project.entity"/>
      <TextSelect title="国家 / 地区" :data="country" v-model="project.country"/>
      <TextInput
        title="关键字"
        placeholder="例如：Daft Punk"
        v-model="project.name"
        @keyup.enter.native="search()"
      />
      <HistoryToggle title="记住搜索历史"/>
      <ThemeToggle title="黑暗模式"/>
      <button v-if="!isGettingData" @click.self.stop="search()">搜索</button>
      <button v-else disabled>
        <i></i>
      </button>
      <footer>
        该项目已在
        <a
          href="https://github.com/coder-ysj/jayyan.net-itunes"
          target="_blank"
          rel="noopener"
        >GitHub</a> 上开源.
        <br>Copyright © 2019
        <a href="https://jayyan.net" target="_blank" rel="noopener">coder-ysj</a>.
      </footer>
    </div>
  </main>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'

// 表单
import entityJson from '~/assets/entity.json'
import countryJson from '~/assets/country.json'

// 组件
import TextSelect from '~/components/textSelect.vue'
import TextInput from '~/components/textInput.vue'
import HistoryToggle from '~/components/historyToggle.vue'
import ThemeToggle from '~/components/themeToggle.vue'

export default {
  components: {
    TextSelect,
    TextInput,
    HistoryToggle,
    ThemeToggle
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
  computed: mapState({
    store_history: state => state.history
  }),
  created() {
    let project

    // 判断：载入搜索历史
    try {
      project = JSON.parse(localStorage['history'])
    } catch {
      return
    }

    if (!this.verifyKey(entityJson, project.entity)) return
    if (!this.verifyKey(countryJson, project.country)) return
    this.$store.commit('CHANGE_HISTORY', true)
    this.project = project
  },
  methods: {
    search() {
      // 逻辑：表单检验
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

      // 逻辑：存储搜索对象
      localStorage.removeItem('history')
      if (this.store_history === true)
        localStorage.setItem('history', JSON.stringify(this.project))

      // 状态：数据获取中…
      this.isGettingData = true

      this.$router.push({
        path: 'result',
        query: {
          name: this.project.name,
          entity: this.project.entity,
          country: this.project.country
        }
      })
    },
    // 逻辑：json 检验
    verifyKey(arr, key) {
      const json = arr[0]
      if (json[key] !== undefined) return true
      return false
    }
  }
}
</script>
<style scoped>
main#home {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  min-height: 660px;
  width: 100%;
  min-width: 320px;
  padding: 30px;
  color: rgb(198, 208, 235);
  background-color: #fff;
}
div#home-option {
  display: block;
  width: 100%;
  max-width: 400px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
button {
  cursor: pointer;
  display: block;
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 10px;
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
  box-shadow: rgba(101, 41, 255, 0.15) 0px 10px 20px;
  overflow: hidden;
}
button > i {
  display: block;
  height: 32px;
  width: 32px;
  margin: auto;
  background: url('~static/loading.svg') center no-repeat;
  background-size: 22px;
  animation: spin 1s infinite linear;
}

footer {
  display: block;
  width: 100%;
  margin-top: 30px;
  font-size: 14px;
  line-height: 1.6;
  color: rgb(32, 82, 132);
  text-align: left;
}

a {
  font-weight: 500;
  color: rgb(156, 114, 248);
}

/* 夜间模式 */
main#home.dark {
  background-color: rgb(33, 44, 79);
}

main#home.dark footer {
  color: rgb(198, 208, 235);
}
</style>
