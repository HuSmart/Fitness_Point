import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
  title: 'Fitness Point',
  selected: '外卖',
  back: false,
  more: false,
  actionList:[],
  muscleList:[]
}

export default new Vuex.Store({
  state
})