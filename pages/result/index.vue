<template>
  <div id="result" :class="{ dark: store_theme === 1 }">
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
      v-on:clearSelectedCard="clearSelectedCard()"
    />
  </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'

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
  computed: mapState({
    store_theme: state => state.theme
  }),
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
<style scoped>
div#result {
  display: block;
  min-height: 100vh;
  width: 100%;
  padding: 45px 30px;
  background-color: #fff;
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

/* 黑暗模式 */
div#result.dark {
  background-color: rgb(33, 44, 79);
}
</style>
