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
    Utils.syncRecToLocal('rec', state.recordeList)
  },
  [types.EDIT_ACTION_RECORDING](state, params) {
    let action = state.title

    state.recordeList[action][nowDayTime][params.index].weight = params.item.weight
    state.recordeList[action][nowDayTime][params.index].count = params.item.count
    Utils.syncRecToLocal('rec', state.recordeList)
  },
  // 初始化当前动作的记录
  [types.INIT_ACTION_RECORDING](state) {
    let action = state.title
    state.recordeList[action] = state.recordeList[action] || {}
    state.recordeList[action][nowDayTime] = state.recordeList[action][nowDayTime] || []
  },
  [types.DEL_ACTION_RECORDING](state, index) {
    let action = state.title
    state.recordeList[action][nowDayTime].splice(index, 1)
    Utils.syncRecToLocal('rec', state.recordeList)
  },
  // 初始化所有动作
  [types.INIT_ALL_RECORDING](state) {
    state.recordeList = Utils.syncRecToApp('rec')
  },
  //编辑动作的基本信息
  [types.SET_ACTION_DETAIL](state, params) {
    // 原始数据
    let oldParams = state.selectedParams
    // 动作名称修改后对该动作的训练记录进行处理
    if (!Utils.isEmptyObject(state.recordeList[oldParams.action])) {
      let tempData = state.recordeList[oldParams.action]
      delete state.recordeList[oldParams.action]//删除老名称字段
      state.recordeList[params.name] = tempData //增加新的字段
      Utils.syncRecToLocal('rec', state.recordeList)
    }
    // 更改所属肌群后进行处理
    if (oldParams.muscle !== params.muscle) {
      // debugger
      const tempData = state.actionList[oldParams.muscle]
      let index = 0
      for (const data of tempData){
        // 判定当前修改的动作
        if (data.name === params.name){
          // 删除多余的muscle属性
          delete data['muscle']
          state.actionList[params.muscle].splice(-1,0,data)
          state.actionList[oldParams.muscle].splice(index, 1)
          state.muscle = params.muscle
        }
        index++
      }
    }
    // 和Localstorage同步
    Utils.syncRecToLocal('act', state.actionList)
  },
  [types.INIT_ALL_ACTION](state) {
    state.actionList = Utils.syncRecToApp('act')
  },
  // 删除action
  [types.DEL_MUSCLES_ACTION](state, params){
    const tempData = state.actionList[params.muscle]
    let index = 0
    for (const data of tempData){
      if (data.name === params.name) {
        state.actionList[params.muscle].splice(index, 1)
      }
      index++
    }
    if(params.key){
      delete state.recordeList[params.name]
    }
    Utils.syncRecToLocal('act', state.actionList)
    Utils.syncRecToLocal('rec', state.recordeList)
  },
  // 添加新的训练动作
  [types.ADD_MUSCLES_ACTION](state, params){
    const muscle = params.muscle
    delete params['muscle']
    state.actionList[muscle].push(params)
    Utils.syncRecToLocal('act', state.actionList)
  },
  //插入一条新的训练计划
  [types.INSERT_NEW_PLAN](state){
    const muscle = state.selectedParams.muscle
    const name = state.selectedParams.name
    if(state.planAction.length !== 0 ){
      state.planList[name][muscle] = state.planAction
    }
    Utils.syncRecToLocal('plan', state.planList)
  },
  [types.INIT_PLAN_LIST](state){
    state.planList = Utils.syncRecToApp('plan')
  },
  [types.GET_ONEDAY_RECORDE](state, day){
    const list = state.recordeList
    let detail = {}
    for (const key in list) {
      if(list[key][day]){
        detail[key] = list[key][day]
      }
    }
    state.progressList = detail
  }
}