import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.store({
  state: {
    articles: []
  },
  mutation : {
    DEFINE_ARTICLES(state, payload) {
      state.articles = payload
    }
  },
  actions: {
    getArticles: ({commit}, payload) => {
      console.log(this.$http)
    }
  }
})
