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
    <button type="submit" class="btn btn-default">Submit</button>    
  </div>
</div>
</template>
<script>
import { mapActions } from 'vuex'
import Navbar from './Navbar'

export default {
  props: ['article'],
  components: {
    Navbar
  },
  data () {
    return {
      form: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    // createArticle () {
    //   this.$http.post('/articles', this.form)
    //   .then(payload => {
    //     console.log(payload);
    //     alert('berhasil')
    //     this.$router.push({name: 'Articles'})
    //   })
    //   .catch(error => {
    //     alert('gagal')
    //   })
    // }
  }
}
</script>
