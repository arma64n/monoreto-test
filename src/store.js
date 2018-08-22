import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    question: {},
    answers: []
  },
  mutations: {
    'SAVE ITEMS' (state, items) {
      state.items = items
    },
    'SAVE QUESTION' (state, question) {
      state.question = question
    },
    'SAVE ANSWERS' (state, answers) {
      state.answers = answers
    }
  },
  actions: {
    async loadItems ({ commit }, { tag }) {
      const response = await api.getItems(tag)
      commit('SAVE ITEMS', response.data.items)
    },
    async loadQuestion ({ commit }, { id }) {
      const response = await api.getQuestion(id)
      commit('SAVE QUESTION', response.data.items[0])
    },
    async loadAnswers ({ commit }, { id }) {
      const response = await api.getAnswers(id)
      commit('SAVE ANSWERS', response.data)
    }
  }
})
