<template>
  <div id="side" class="flex-center" :class="{ active: toggleStatus }">
    <i class="sidebar-toggle" @click.self.stop="$emit('toggleSidebar', false)"></i>
    <div id="side-container">
      <TextInput
        title="名称"
        placeholder="例如：微信"
        v-model="project.name"
        @keyup.enter.native="test()"
      />
      <TextSelect title="类型" :entity="entity"/>
      <TextSelect title="地区" :entity="entity"/>
      <button class="confirm" @click.self.stop="search()">搜索</button>
    </div>
    <footer>
      该项目由
      <a href="https://github.com/coder-ysj">coder-ysj</a> 负责开发
      <br>目前已在
      <a href>GitHub</a> 上开源，欢迎 Star ⭐️
      <br>也希望您能扫描文档中的二维码付费赞助 💰
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import entityJson from '../assets/entity'
import TextInput from './textInput.vue'
import TextSelect from './textSelect.vue'

export default Vue.extend({
  props: ['toggleStatus'],
  components: {
    TextInput,
    TextSelect
  },
  data() {
    return {
      project: {
        name: '',
        entity: '',
        country: ''
      },
      entity: entityJson
    }
  },
  methods: {
    search() {
      console.warn('Search.')
    }
  }
})
</script>

<style scoped>
div#side {
  height: 100%;
  min-height: 550px;
  width: 350px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 30px 40px;
  border-right: 1px solid #dbdfe1;
  background: #fff;
  overflow: hidden;
  transition: left 0.25s ease-in-out;
  z-index: 9;
}
div#side.active {
  left: 0;
}

i.sidebar-toggle {
  cursor: pointer;
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  background: url('../static/close.svg') center no-repeat;
  background-size: 30px;
}

div#side-container {
  display: block;
  width: 100%;
}

button.confirm {
  cursor: pointer;
  display: block;
  margin-top: 30px;
  width: 100%;
  border: 0;
  border-radius: 40px;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: bold;
  line-height: 2;
  appearance: none;
  outline: 0;
  color: #fff;
  background: linear-gradient(
    104.74deg,
    rgb(75, 38, 255) 0%,
    rgb(176, 30, 255) 100%
  );
  overflow: hidden;
}

footer {
  display: block;
  width: 100%;
  padding: 15px;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 12px;
  line-height: 1.6;
  color: #999;
  text-align: left;
}

a {
  font-weight: 500;
  color: #666;
}

@media screen and (max-width: 768px) {
  div#side {
    left: -350px;
  }

  i.sidebar-toggle {
    display: block;
  }
}

@media screen and (max-width: 350px) {
  div#side {
    width: 100%;
  }
}
</style>
