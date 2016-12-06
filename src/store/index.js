import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

let state ={
  title: '选择一个部位开始锻炼',
  selected: '开始',
  back: false,
  more: true,
  unit: 'Kg',
  show: false,
  // 动作列表
  actionList:{"胸部":[{"name":"Beatrice Joyce"},{"name":"Steele Merritt"},{"name":"Vanessa Frost"},{"name":"Suzette Ray"}],"背部":[{"name":"Frank Cantu"},{"name":"Moody Dixon"},{"name":"Jocelyn Wilkerson"},{"name":"Jones Hicks"}],"腿部":[{"name":"Beatriz Thomas"},{"name":"Mcintyre Bennett"},{"name":"Tia Glass"},{"name":"Shannon Howe"}],"肩部":[{"name":"Tracy Rowland"},{"name":"Davidson Steele"},{"name":"Bennett Nicholson"},{"name":"Spence Kidd"}],"手臂":[{"name":"Quinn Gibson"},{"name":"Lindsey Rojas"},{"name":"Evelyn Carroll"},{"name":"Adrian Zimmerman"}],"腹部":[{"name":"Angelica Thompson"},{"name":"Britt Riggs"},{"name":"Tasha Horn"},{"name":"Helen Chambers"}],"有氧":[{"name":"Minnie Crawford"},{"name":"Aimee Gonzalez"},{"name":"Melanie Shields"},{"name":"Reyna Leblanc"}],"拉伸":[{"name":"Townsend Gardner"},{"name":"Edwina Waller"},{"name":"Morin Silva"},{"name":"Isabel Puckett"}]},
  // 肌群列表
  muscleList:["胸部","背部","手臂","肩部","腿部","腹部","有氧","拉伸"],
  // 记录列表
  recordeList:{},
  // 记录每次锻炼的时间-动作
  recordeTimeList:[]
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})