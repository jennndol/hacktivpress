<template>
  
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['getArticles'])
  },
  created () {
    this.getArticles()
  }
}
</script>
