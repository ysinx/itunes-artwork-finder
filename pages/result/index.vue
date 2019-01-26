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
import Vue from 'vue'

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
      selectedCard: []
    }
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
div#result-header {
  display: none;
  width: 100%;
  padding: 10px 15px;
  text-align: left;
  overflow: hidden;
}

div#result-card {
  display: block;
  width: 100%;
  padding: 30px 15px;
  font-size: 0;
  text-align: center;
}
</style>
