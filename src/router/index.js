import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/components/Home'
import Project from '@/components/Project'
import Mycenter from '@/components/Mycenter'
import More from '@/components/More'
import accoutapply from '@/components/accoutapply'
import enroll from '@/components/account/enroll'
import login from '@/components/account/login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/Mycenter',
      name: 'Mycenter',
      component: Mycenter
    },
    {
      path: '/More',
      name: 'More',
      component: More
    },
    {
      path: '/enroll',
      name: 'enroll',
      component: enroll
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/accoutapply',
      name: 'accoutapply',
      component: accoutapply
    }
  ]
})
