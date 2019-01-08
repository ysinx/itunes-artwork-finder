<template>
  <div id="home">
    <SideBar :toggleStatus="toggleStatus" v-on:toggleSidebar="toggleSidebar($event)"/>
    <div id="home-header">
      <i class="sidebar-toggle" @click.self.stop="toggleSidebar(true)"></i>
    </div>
    <p>Body</p>
  </div>
</template>

<script>
import SideBar from '../components/sidebar.vue'

export default {
  components: {
    SideBar
  },
  data() {
    return {
      toggleStatus: false
    }
  },
  methods: {
    toggleSidebar(statusCode) {
      this.toggleStatus = statusCode
    }
  }
}
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
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #dbdfe1;
  overflow: hidden;
}

i.sidebar-toggle {
  cursor: pointer;
  display: block;
  height: 40px;
  width: 40px;
  background: url('../static/menu.svg') center no-repeat;
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
