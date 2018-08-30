<template>
  <div>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Type a question" v-model="tag">
      </div>
      <div class="control" @click="initSearch">
        <a class="button is-primary">
          Search
        </a>
      </div>
    </div>
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
      await this.loadItems({tag: this.tag})
      this.$router.push({name: 'result'})
    }
  }
}
</script>

<style>

</style>
