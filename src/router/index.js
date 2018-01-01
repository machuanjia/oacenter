import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'views/dashboard/dashboard.vue'
import AppLayout from 'components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Center',
      component:AppLayout,
      redirect: '/dashboard',
      name: 'home',
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      }]
    }
  ]
})
