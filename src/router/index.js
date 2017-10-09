import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import UserProfile from '@/components/UserProfile'
import UserPosts from '@/components/UserPosts'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/user/:id',
      component: User,
      children: [{
        path: 'profile',
        component: UserProfile
      }, {
        path: 'posts',
        component: UserPosts
      }]
    }
  ]
})
