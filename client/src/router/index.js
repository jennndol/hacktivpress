import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
