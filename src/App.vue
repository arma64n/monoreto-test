<template>
  <div id="app" class="container">
    <div class="navbar is-primary">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Search</router-link>
          <router-link class="navbar-item" to="/result" v-if="items.length">Result</router-link>
          <router-link class="navbar-item" to="/question" v-if="answers.length">Question</router-link>
        </div>
      </div>
    </div>
    <hr>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['items', 'answers'])
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>


