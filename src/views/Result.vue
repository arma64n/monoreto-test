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
            <!-- <p class="subtitle is-6">Answers: {{item.answer_count}}</p> -->
          </div>
        </div>

        <div class="content">
          <p @click="goToQuestion(item.question_id)">{{item.title}}</p>
          (Answers: {{item.answer_count}})
          <br>
          <a href="#" v-for="tag in item.tags" :key="tag" @click="showTagQuestions(tag)"> #{{tag}} </a>
        </div>
      </div>
    </div>
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
            <p @click="goToQuestion(item.question_id)">{{item.title}}</p>
            (Answers: {{item.answer_count}})
            <br>
            <a href="#" v-for="tag in item.tags" :key="tag"> #{{tag}} </a>
          </div>
        </div>
      </div>
    </div>
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
  background: gray;
  outline: none;
}

.aside {
  position: fixed;
  background: red;
  top: 0;
  width: 50vw;
  left: 50%;
  padding: 1em;
  height: 100vh;
  overflow-y: auto;
}
</style>
