<template>
  <div ref="options">
    <div class="card" 
      v-for="item in items" 
      :key="item.question_id" 
      tabindex="0"
      @keydown.enter="showAuthorQuestions(item)"
      @keydown.esc="lastFiveShow = false"
      @keydown.up="highlightPrev($event.target)"
      @keydown.down="highlightNext($event.target)"
      >
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="item.owner.profile_image" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4" @click="showAuthorQuestions(item)">{{item.owner.display_name}}</p>
          </div>
        </div>

        <div class="content">
          <p class="title is-6" @click="goToQuestion(item.question_id)">{{item.title}}</p>
          <p @click="goToAnswers(item.question_id)">Answers: {{item.answer_count}}</p>
          <div class="field is-grouped is-grouped-multiline">
            <div class="control" v-for="tag in item.tags" :key="tag" >
              <span class="tag is-primary" @click="showTagQuestions(tag)"> #{{tag}} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide">
      <div class="aside" v-show="lastFiveShow">
        <div class="card" v-for="item in lastFive" :key="item.question_id">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="item.owner.profile_image" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{item.owner.display_name}}</p>
                <!-- <p class="subtitle is-6">Answers: {{item.answer_count}}</p> -->
              </div>
            </div>

            <div class="content">
              <p class="title is-6" @click="goToQuestion(item.question_id)">{{item.title}}</p>
              <p @click="goToAnswers(item.question_id)">Answers: {{item.answer_count}}</p>
              <div class="field is-grouped is-grouped-multiline">
                <div class="control" v-for="tag in item.tags" :key="tag" >
                  <span class="tag is-primary" @click="showTagQuestions(tag)"> #{{tag}} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['items', 'lastFive'])
  },
  data () {
    return {
      lastFiveShow: false
    }
  },
  mounted () {
    this.$refs.options.children[0].focus()
  },
  methods: {
    ...mapActions(['loadQuestion', 'loadAnswers', 'loadAuthorLastFive', 'loadTagLastFive']),
    async goToQuestion (x) {
      await this.loadQuestion({id: x})
      await this.loadAnswers({id: x})
      this.$router.push({name: 'question'})
    },
    async goToAnswers (x) {
      await this.loadQuestion({id: x})
      await this.loadAnswers({id: x})
      this.$router.push({name: 'question', hash: '#answers'})
    },
    async showAuthorQuestions (item) {
      await this.loadAuthorLastFive({id: item.owner.user_id})
      this.lastFiveShow = true
    },
    async showTagQuestions (tag) {
      await this.loadTagLastFive({tag: tag})
      this.lastFiveShow = true
    },
    highlightPrev(x) {
      if (x.previousElementSibling) {
        x.previousElementSibling.focus()
      }
    },
    highlightNext(x) {
      if (x.nextElementSibling) {
        x.nextElementSibling.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card:focus {
  background: #dadada;
  outline: none;
}

.aside {
  position: fixed;
  background: #bebebe;
  top: 0;
  width: 50vw;
  left: 50%;
  padding: 10px;
  height: 100vh;
  overflow-y: auto;
  z-index: 50;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>
