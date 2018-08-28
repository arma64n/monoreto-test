import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import(/* webpackChunkName: "result" */ './views/Result.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import(/* webpackChunkName: "question" */ './views/Question.vue')
    }
  ]
})
