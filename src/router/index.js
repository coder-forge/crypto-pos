import Vue from 'vue'
import Router from 'vue-router'
import Calc from '@/components/Calc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calc',
      component: Calc
    }
  ]
})
