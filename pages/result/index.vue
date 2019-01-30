<template>
  <div id="result">
    <Empty v-if="!itunesResult || itunesResult.length <= 0" :itunesResult="itunesResult"/>
    <div id="result-card" v-if="itunesResult">
      <Card
        v-for="item in itunesResult"
        :key="item.id"
        :src="item"
        :selectedCard="selectedCard"
        v-on:selectCard="selectCard(item, $event)"
      />
    </div>
    <Download :selectedCard="selectedCard" v-on:clearSelectedCard="selectedCard = []"/>
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

export default {
  components: {
    Empty,
    Card,
    Download
  },
  data() {
    return {
      itunesResult: null,
      selectedCard: [],
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
          item.clicked = false
          item.ratio = 0
        })
        return { itunesResult: res.results }
      })
      .catch(() => {
        return { itunesResult: [] }
      })
  },
  methods: {
    selectCard(item, clickStatus) {
      item.clicked = clickStatus
      if (clickStatus === true) {
        this.selectedCard++
        return
      }
      this.selectedCard--
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
  background-color: rgb(4, 8, 37);
}

div#result-card {
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  font-size: 0;
  text-align: center;
}

@media screen and (max-width: 414px) {
  div#result {
    padding: 30px 15px;
  }
}
</style>
