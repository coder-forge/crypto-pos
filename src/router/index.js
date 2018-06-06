import Vue from 'vue'
import Router from 'vue-router'
import Calc from '@/components/Calc'
import QR from '@/components/QR'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calc',
      component: Calc
    },
    {
      path: '/qr/:chain/:address/:amount',
      name: 'QR',
      component: QR
    }
  ]
})
