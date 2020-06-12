import Vue from 'vue'
import Router from 'vue-router'
import processing from '@/components/processing'
import fangdou from '@/components/fangdou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'processing',
      component: processing
    },
    {
      path: '/fangdou',
      name: 'fangdou',
      component: fangdou
    },
  ]
})
