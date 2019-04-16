import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import People from '@/components/People'
import Films from '@/components/Films'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/films',
      name: 'Films',
      component: Films
    }
  ]
})
