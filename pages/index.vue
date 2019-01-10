<template>
  <div id="home">
    <div id="home-header">
      <i class="sidebar-toggle" @click.self.stop="toggleSidebar(true)"></i>
    </div>
    <Empty v-if="!itunesResult || itunesResult.length <= 0" :itunesResult="itunesResult"/>
    <div id="home-card" :class="{ lock: toggleStatus || !itunesResult || itunesResult.length <= 0 }">
      <Card v-for="item in itunesResult" :key="item.id" :src="item"/>
    </div>
    <ScrollTop/>
    <SideBar
      :toggleStatus="toggleStatus"
      :itunesResult="itunesResult"
      v-on:toggleSidebar="toggleSidebar($event)"
      v-on:itunesResultCallback="itunesResult = $event; toggleSidebar(false);"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import SideBar from '../components/sidebar.vue'
import Empty from '../components/empty.vue'
import Card from '../components/card.vue'
import ScrollTop from '../components/scrollTop.vue'

export default Vue.extend({
  components: {
    SideBar,
    Empty,
    Card,
    ScrollTop
  },
  data() {
    return {
      toggleStatus: true,
      itunesResult: null
    }
  },
  created() {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        this.toggleStatus = false
      }
    })
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
  width: 100%;
  padding: 30px 15px;
  font-size: 0;
  text-align: center;
}
div#home-card.lock {
  position: fixed;
  top: 60px;
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
@media screen and (max-width: 600px) {
  div#home-card {
    padding: 0 15px 15px 15px;
  }
}
</style>
