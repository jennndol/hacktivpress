<template>
<div>
  <navbar/>
  <div class="container">
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control" v-model="form.title">
    </div>
    <div class="form-group">
      <label for="content">Content:</label>
      <input type="text" class="form-control" v-model="form.content">
    </div>
    <button type="submit" class="btn btn-default" @click="createArticle">Submit</button>    
  </div>
</div>
</template>
<script>
import { mapActions } from 'vuex'
import Navbar from './Navbar'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      form: {
        title: '',
        content: '',
        userId: 'abcdefghi'
      }
    }
  },
  methods: {
    createArticle () {
      this.$http('/articles', this.form)
      .then(payload => {
        alert('berhasil')
      })
      .catch(error => {
        alert('gagal')
      })
    }
  }
}
</script>
