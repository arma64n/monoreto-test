<template>
  <div>
    Search page
    <input type="text" v-model="tag">
    <button type="button" @click="initSearch">Search</button>
  </div>
</template>

<script>
import * as api from '@/api/api'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      tag: ''
    }
  },
  methods: {
    ...mapActions(['loadItems']),
    async initSearch() {
      await this.loadItems(this.tag)
      this.$router.push({name: 'result'})
    }
  }
}
</script>

<style>

</style>
