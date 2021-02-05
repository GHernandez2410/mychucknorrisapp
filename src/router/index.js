import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import Categories from '../pages/Categories.vue'
import CategoriesFiltered from '../pages/CategoriesFiltered.vue'
import Search from '../pages/Search.vue'
import About from '../pages/About.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/filterbycategory',
      name: 'CategoriesFiltered',
      component: CategoriesFiltered
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router
