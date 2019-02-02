<template>
  <div id="result">
    <Empty v-if="!itunesResult || itunesResult.length <= 0" :itunesResult="itunesResult"/>
    <div id="result-card" v-if="itunesResult">
      <Card
        v-for="item in itunesResult"
        :key="item.id"
        :src="item"
        :selectedCard="selectedCard"
        v-on:selectRatio="selectRatio(item, $event)"
      />
    </div>
    <Download
      :itunesResult="itunesResult"
      :selectedCard="selectedCard"
      :isLoading="isLoading"
      v-on:clearSelectedCard="clearSelectedCard()"
      v-on:isLoading="isLoading = $event"
    />
    <RainbowLoading :isLoading="isLoading"/>
  </div>
</template>
<script>
import axios from 'axios'

// 表单
import entityJson from '~/assets/entity.json'
import countryJson from '~/assets/country.json'

// 组件
import Empty from '~/components/empty.vue'
import Card from '~/components/card.vue'
import Download from '~/components/download.vue'
import RainbowLoading from '~/components/rainbowLoad.vue'

export default {
  components: {
    Empty,
    Card,
    Download,
    RainbowLoading
  },
  data() {
    return {
      itunesResult: null,
      selectedCard: 0,
      isLoading: false,
      project: {
        name: null,
        entity: null,
        country: null
      }
    }
  },
  asyncData({ query }) {
    let project

    // 逻辑：json 检验
    let verifyKey = (arr, key) => {
      const json = arr[0]
      if (json[key] !== undefined) return true
      return false
    }

    // 判断：载入搜索历史
    if (!verifyKey(entityJson, query.entity)) return { itunesResult: [] }
    if (!verifyKey(countryJson, query.country)) return { itunesResult: [] }

    // API：获取数据
    return axios
      .get('https://api.jayyan.net/itunes/list', {
        params: {
          name: query.name,
          country: query.country,
          entity: query.entity,
          limit: 50
        }
      })
      .then(response => {
        const res = response.data
        if (!res.results || res.results.length <= 0) {
          return { itunesResult: [] }
        }
        res.results.map(item => {
          item.ratio = null
        })
        return { itunesResult: res.results }
      })
      .catch(() => {
        return { itunesResult: [] }
      })
  },
  methods: {
    selectRatio(item, ratio) {
      if (item.ratio === ratio) {
        item.ratio = null
        this.selectedCard--
        return
      }
      if (!item.ratio) {
        this.selectedCard++
      }
      item.ratio = ratio
    },
    clearSelectedCard() {
      this.itunesResult.map(item => {
        item.ratio = null
      })
      this.selectedCard = 0
    }
  }
}
</script>
<style>
div#result {
  display: block;
  min-height: 100vh;
  width: 100%;
  padding: 45px 30px;
  background: rgb(33, 44, 79);
}

div#result-card {
  display: block;
  width: 100%;
  max-width: 1500px;
  margin: auto;
  font-size: 0;
  text-align: center;
}

@media screen and (max-width: 550px) {
  div#result {
    padding: 30px 15px 45px 15px;
  }
}
</style>
