import Vue from 'vue'
import App from './App'
import MinUI from 'mint-ui'
import VueRouter from 'vue-router'
import HomeRouter from './router-components/HomeRouter.vue'
import store from './store'

Vue.use(VueRouter)
Vue.use(MinUI)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomeRouter
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App,
})
