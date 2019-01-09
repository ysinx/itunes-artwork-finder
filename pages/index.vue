<template>
  <div id="home">
    <SideBar
      :toggleStatus="toggleStatus"
      :itunesResult="itunesResult"
      v-on:toggleSidebar="toggleSidebar($event)"
    />
    <div id="home-header">
      <i class="sidebar-toggle" @click.self.stop="toggleSidebar(true)"></i>
    </div>
    <Empty v-if="!itunesResult || itunesResult.length <= 0"/>
    <div id="home-card" :class="{ lock: toggleStatus || itunesResult.length <= 0 }">
      <Card v-for="item in itunesResult" :key="item.id" :src="item.artworkUrl600"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import SideBar from '../components/sidebar.vue'
import Empty from '../components/empty.vue'
import Card from '../components/card.vue'

export default Vue.extend({
  components: {
    SideBar,
    Empty,
    Card
  },
  data() {
    return {
      toggleStatus: true,
      itunesResult: []
    }
  },
  methods: {
    toggleSidebar(statusCode) {
      this.toggleStatus = statusCode
    }
  }
})
</script>

<style>
div#home {
  padding-left: 350px;
}

div#home-header {
  display: none;
  width: 100%;
  padding: 10px 15px;
  text-align: left;
  overflow: hidden;
}

i.sidebar-toggle {
  cursor: pointer;
  display: block;
  height: 40px;
  width: 40px;
  background: url('../static/search.svg') center no-repeat;
  background-size: 30px;
}

div#home-card {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
div#home-card.lock {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

@media screen and (max-width: 768px) {
  div#home {
    padding: 0;
  }

  div#home-header {
    display: block;
  }
}
</style>
