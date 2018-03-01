import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'
import Login from '@/components/Login'
import CreateArticle from '@/components/CreateArticle'
import UpdateArticle from '@/components/UpdateArticle'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/create',
      name: 'Create',
      component: CreateArticle
    },
    {
      path: '/update',
      name: 'Update',
      component: UpdateArticle
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
