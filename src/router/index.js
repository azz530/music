import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path:'/login',
      component:()=>import('@/pages/common/Login.vue'),
      hidden:true,
    },
    {
      path:'/register',
      component:()=>import('@/pages/common/Register.vue'),
      hidden:true,
    },
    {
      path:'/findPsw',
      component:()=>import('@/pages/common/FindPsw.vue'),
      hidden:true,
    },
    {
      path:'/home',
      component:()=>import('@/pages/Home.vue'),
      hidden:true,
    },
]

const router = new VueRouter({
  routes
})

export default router
