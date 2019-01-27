<template>
  <div id="result">
    <Empty v-if="!itunesResult || itunesResult.length <= 0" :itunesResult="itunesResult"/>
    <div id="result-card">
      <Card
        v-for="item in itunesResult"
        :key="item.id"
        :src="item"
        :selectedCard="selectedCard"
        v-on:selectCard="selectCard($event)"
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
  watchQuery: ['name', 'entity', 'country'],
  asyncData({ query }) {
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
          return
        }
      })
      .catch(() => {})
  },
  methods: {
    selectCard(data) {
      if (this.selectedCard.length <= 0) {
        this.selectedCard.push(data)
      } else {
        for (let index = 0; index < this.selectedCard.length; index++) {
          if (Object.is(this.selectedCard[index], data)) {
            this.selectedCard.splice(index, 1)
            return
          }
        }
        this.selectedCard.push(data)
      }
    }
  }
}
</script>
<style>
div#result {
  display: block;
  height: 100vh;
  width: 100%;
  padding: 30px;
  background-color: rgb(4, 8, 37);
  overflow: hidden;
}

div#result-card {
  display: block;
  width: 100%;
  font-size: 0;
  text-align: center;
}
</style>
