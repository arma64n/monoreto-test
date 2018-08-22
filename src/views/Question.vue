<template>
  <div>
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
