<template>
  <div>
    <h3 class="title is-3">Question: {{question.title}}</h3>
    <div v-html="question.body"></div>
    <hr>
    <div id="answers">
      <template v-if="answers.length">
        <h3 class="title is-3">Answers:</h3>
        <article class="message" v-for="answer in answers.sort((a, b) => b.score - a.score)" :key="answer.answer_id">
          <div class="message-header">
            <p>{{answer.owner.display_name}}</p>
            <p>Rating: {{answer.score}}</p>
          </div>
          <div class="message-body" v-html="answer.body"></div>
        </article>
      </template>
      <h3 class="title is-3" v-else>No answers yet :(</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['question', 'answers'])
  }
}
</script>
