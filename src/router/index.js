import Vue from 'vue'
import Router from 'vue-router'
import zinrou from '@/components/zinrou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zinrou',
      component: zinrou
    }
  ]
})
