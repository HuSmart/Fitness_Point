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

import PlanRouter from './router-components/PlanRouter.vue'
import PlanDetail from './components/plan/PlanDetail.vue'
import PlanEdit from './components/plan/PlanEdit.vue'
import PlanActionSelect from './components/plan/PlanActionList.vue'
import PlanMuscleList from './components/plan/PlanMuscleList.vue'
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
          components: {
            start: StartPage,
            plan: PlanRouter
          }
        },
        {
          path: 'action/:muscle',
          components: {
            start: ActionRouter,
            plan: PlanRouter
          }
        },
        {
          path: 'detail/:action',
          components: {
            start: ActionDetail,
            plan: PlanRouter
          }
        },{
          path: 'recorde/:action',
          components: {
            start: Recording,
            plan: PlanRouter
          }
        },{
          path: 'edit/:action',
          components: {
            start: AddtAction,
            plan: PlanRouter
          }
        },{
          path: 'PlanDetail/:plan',
          components: {
            start: StartPage,
            plan: PlanDetail
          }
        },{
          path: 'planEdit/:action',
          components: {
            start: StartPage,
            plan: PlanEdit
          }
        },{
          path: 'planSelect/:muscle',
          components: {
            start: StartPage,
            plan: PlanActionSelect
          }
        },{
          path: "PlanMuscleList/:plan",
          components: {
            start: StartPage,
            plan: PlanMuscleList
          }
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
