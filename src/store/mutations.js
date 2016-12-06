import * as types from './mutation-type'
import Utils from '../lib/utils'

export default {
  [types.ADD_ACTION_RECORDING](state, item) {
    // 在进入记录页面前已经将Head显示为要记录的动作
    let action = state.title
    let dayTime = Utils.getDate()
    
    state.recordeList[action] = state.recordeList[action] || {}

    state.recordeList[action][dayTime] = state.recordeList[action][dayTime] || []

    state.recordeList[action][dayTime].push(item)
  },
  [types.EDIT_ACTION_RECORDING](state, params){
    let action = params[state.title]
    let dayTime = Utils.getDate()
    console.log(params)
    return
    state.recordeList[action][dayTime][params.index].weight = params.weight
    state.recordeList[action][dayTime][params.index].count = params.count
  }
}