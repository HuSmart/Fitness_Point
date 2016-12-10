import Vue from 'vue'
import App from './App'
import MinUI from 'mint-ui'
import VueRouter from 'vue-router'

import store from './store'

import HomeRouter from './router-components/HomeRouter.vue'
import ActionRouter from './router-components/ActionRouter.vue'
import StartPage from './components/StartPage'
import ActionDetail from './router-components/ActionDetail.vue'
import Recording from './router-components/Recording.vue'
import AddtAction from './components/AddAction.vue'
Vue.use(VueRouter)
Vue.use(MinUI)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomeRouter,
      children: [
        {
          path:'',
          component: StartPage
        },
        {
          path: 'action/:muscle',
          component: ActionRouter
        },
        {
          path: 'detail/:action',
          component: ActionDetail
        },{
          path: 'recorde/:action',
          component: Recording
        },{
          path: 'edit/:action',
          component: AddtAction
        }
      ]
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
