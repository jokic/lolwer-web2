import Vue from 'vue'
import Router from 'vue-router'
import Match from '@/page/match/match'
import User from '@/page/user/user'
import Video from '@/page/video/video'
import All from '@/page/match/children/all'
import LPL from '@/page/match/children/lpl'
import LCK from '@/page/match/children/lck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/match'
    },
    {
      path:'/match',
      component: Match,
      children:[{
      	path:'all',
      	component:All
      },{
        path:'',
        redirect:'/match/all'
      },{
        path:'lpl',
        component:LPL
      },{
        path:'lck',
        component:LCK
      }]
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/video',
      component:Video
    }
  ]
})
