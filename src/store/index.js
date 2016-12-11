import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

let state = {
  title: '选择一个部位开始锻炼',
  selected: '开始',
  back: false,
  more: true,
  unit: 'Kg',
  show: false,
  selectedParams: {},
  // 动作列表
  actionList: { "胸部": [{ "name": "Deena Hopper", "desc": "Carson" }, { "name": "Bass Livingston", "desc": "Jami" }, { "name": "Marjorie Jefferson", "desc": "Holder" }, { "name": "Klein Fitzpatrick", "desc": "Munoz" }], "背部": [{ "name": "Willa Bruce", "desc": "Lois" }, { "name": "Coleman Townsend", "desc": "Diaz" }, { "name": "Adrian Andrews", "desc": "Pickett" }, { "name": "Corinne White", "desc": "Avery" }], "腿部": [{ "name": "Rodriquez Ferguson", "desc": "Frederick" }, { "name": "Aileen Holland", "desc": "Leola" }, { "name": "Margie Hamilton", "desc": "Patsy" }, { "name": "Mara Warren", "desc": "Effie" }], "肩部": [{ "name": "Rowland Simmons", "desc": "Alexander" }, { "name": "Tia Potts", "desc": "Rhea" }, { "name": "Cooke Woodward", "desc": "Alyson" }, { "name": "Faye Browning", "desc": "Melva" }], "手臂": [{ "name": "Bonnie Carney", "desc": "Lynn" }, { "name": "Kimberley Carrillo", "desc": "Leann" }, { "name": "Campbell Jimenez", "desc": "Charlene" }, { "name": "Acevedo Adams", "desc": "Beatrice" }], "腹部": [{ "name": "Genevieve Velez", "desc": "Lilly" }, { "name": "Miriam Roach", "desc": "Kathleen" }, { "name": "Benson Parsons", "desc": "Flossie" }, { "name": "Mccullough Cortez", "desc": "Koch" }], "有氧": [{ "name": "Valenzuela Hendrix", "desc": "Alberta" }, { "name": "Michael Tate", "desc": "Bryan" }, { "name": "Therese Schneider", "desc": "Santana" }, { "name": "Lesa Pratt", "desc": "Wheeler" }], "拉伸": [{ "name": "Ramona Morton", "desc": "Lourdes" }, { "name": "Saunders Warner", "desc": "Bush" }, { "name": "Augusta Maynard", "desc": "Webb" }, { "name": "Britney Mayer", "desc": "Hayes" }] },// 肌群列表
  muscleList: ["胸部", "背部", "手臂", "肩部", "腿部", "腹部", "有氧", "拉伸"],
  // 记录列表
  recordeList: {},
  // 记录每次锻炼的时间-动作
  recordeTimeList: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})