import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'

const MSite = () => import('@/views/msite/MSite')
// const Order = () => import('@/views/order/Order')
// const Profile = () => import('@/views/profile/Profile')
// const Find = () => import('@/views/find/Find')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/msite'
      },
      {
        path: '/msite',
        name: 'MSite',
        component: MSite
      }
      // {
      //   path: '/find',
      //   name: 'Find',
      //   component: Find
      // },
      // {
      //   path: '/order',
      //   name: 'Order',
      //   component: Order
      // },
      // {
      //   path: '/profile',
      //   name: 'Profile',
      //   component: Profile
      // }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
