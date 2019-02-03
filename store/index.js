import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      /* 0 代表浅色主题
      1 代表深色主题 */
      theme: 0
    },
    mutations: {
      changeTheme(state, status) {
        state.theme = status
      }
    }
  })

export default store
