<template>
  <div>
    <h1>Question: {{question.title}}</h1>
    {{question}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['question'])
  }
}
</script>
