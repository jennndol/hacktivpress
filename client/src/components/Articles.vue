<template>
<div>
  <navbar/>
  <div class="container">
    <div v-for="article in articles" :key="article._id">
      <article>
        <h1>{{ article.title }}</h1>
        <p>{{ article.content }}</p>
        <router-link :to="{ name: 'Update'}">Edit</router-link>
        <a @click="deleteArticle(article._id)">Delete</a>
      </article>
    </div>
  </div>
</div>
</template>
<script>
import Navbar from './Navbar'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      articles: [],
      form: {
        title: '',
        content: '',
        userId: 'abcdefghi'
      }
    }
  },
  methods: {
    getArticles () {
      this.$http.get('/articles')
        .then(payload => {
          this.articles = payload.data.docs
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteArticle (id) {
      this.$http.delete(`/articles/${id}`)
        .then(payload => {
          alert('Berhasil menghapus')
          this.$router.push({name: 'Articles'})
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
