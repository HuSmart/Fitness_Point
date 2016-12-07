import * as types from './mutation-type'
import Utils from '../lib/utils'
// let action = state.title
// 系统当前时间 0.0现在只支持当天、以后修改成指定的好了
let nowDayTime = Utils.getDate()

export default {
  [types.ADD_ACTION_RECORDING](state, item) {
    // 在进入记录页面前已经将Head显示为要记录的动作
    let action = state.title
    state.recordeList[action][nowDayTime].push(item)
    Utils.syncRecToLocal(state.recordeList)
  },
  [types.EDIT_ACTION_RECORDING](state, params) {
    let action = state.title

    state.recordeList[action][nowDayTime][params.index].weight = params.item.weight
    state.recordeList[action][nowDayTime][params.index].count = params.item.count
    Utils.syncRecToLocal(state.recordeList)
  },
  // 初始化当前动作的记录
  [types.INIT_ACTION_RECORDING](state) {
    let action = state.title
    state.recordeList[action] = state.recordeList[action] || {}
    state.recordeList[action][nowDayTime] = state.recordeList[action][nowDayTime] || []
  },
  [types.DEL_ACTION_RECORDING](state, index) {
    let action = state.title
    state.recordeList[action][nowDayTime].splice(index,1)
    Utils.syncRecToLocal(state.recordeList)
  },
  // 初始化所有动作
  [types.INIT_ALL_RECORDING](state){
    state.recordeList = Utils.syncRecToApp()
  }
}