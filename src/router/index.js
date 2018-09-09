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
  }]
})

// routerconst.beforeEach((to, from, next) => {
//   // 主页跳转逻辑
//   // console.log(to)
//   // if (to.matched.some(record => record.meta.index)) {
//   //   const index = pcOrphone()
//   //   if (to.path !== index) {
//   //     next({
//   //       path: index
//   //     })
//   //   } else {
//   //     next()
//   //   }
//   // } else {
//   //   next()
//   // }
// })
// routerconst.afterEach((to, from) => {
// })
export default routerconst