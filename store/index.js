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
      changeTheme(state, status) {
        state.theme = status
      },
      changeHistory(state, status) {
        state.history = status
      }
    }
  })

export default store
