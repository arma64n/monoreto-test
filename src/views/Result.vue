<template>
  <div>
    <div class="card" v-for="item in items" :key="item.question_id">
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
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['items'])
  },
  methods: {
    ...mapActions(['loadQuestion', 'loadAnswers']),
    async goToQuestion (x) {
      console.log(x)
      await this.loadQuestion({id: x})
      await this.loadAnswers({id: x})
      this.$router.push({name: 'question'})
    }
  }
}
</script>
