<template>
  <div id="home">
    <SideBar :toggleStatus="toggleStatus" v-on:toggleSidebar="toggleSidebar($event)"/>
    <div id="home-header">
      <i class="sidebar-toggle" @click.self.stop="toggleSidebar(true)"></i>
    </div>
    <Empty v-if="itunesResult.length <= 0"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SideBar from '../components/sidebar.vue'
import Empty from '../components/empty.vue'

export default Vue.extend({
  components: {
    SideBar,
    Empty
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
  display: block;
  width: 100%;
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

@media screen and (max-width: 768px) {
  div#home {
    padding: 0;
  }

  div#home-header {
    display: block;
  }
}
</style>
