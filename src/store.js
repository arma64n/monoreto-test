import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as api from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    question: {},
    answers: [],
    lastFive: []
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
    },
    'SAVE AUTHOR LAST' (state, last) {
      state.lastFive = last
    },
    'SAVE TAG LAST' (state, last) {
      state.lastFive = last
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
    },
    async loadAuthorLastFive ({ commit }, { id }) {
      const response = await api.getAuthorLastFive(id)
      commit('SAVE AUTHOR LAST', response.data.items.slice(0, 5))
    },
    async loadTagLastFive ({ commit }, { tag }) {
      const response = await api.getTagLastFive(tag)
      commit('SAVE TAG LAST', response.data.items.slice(0, 5))
    }
  },
  plugins: [createPersistedState()]
})
