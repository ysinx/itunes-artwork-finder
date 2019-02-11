import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      theme: 0,
      history: false
    },
    mutations: {
      CHANGE_THEME(state, status) {
        state.theme = status
      },
      CHANGE_HISTORY(state, status) {
        state.history = status
      }
    }
  })

export default store
