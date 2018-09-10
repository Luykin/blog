import Vue from 'vue'
import Router from 'vue-router'
// import { NOWCONFIG } from 'api/appConfig'

Vue.use(Router)

// const config = NOWCONFIG

const routerconst = new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    component: () =>
      import ('components/index/index')
  }, {
    path: '/home',
    component: () =>
      import ('components/index/home')
  }]
})

// routerconst.afterEach((to, from) => {
// })
export default routerconst