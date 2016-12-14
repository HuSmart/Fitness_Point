import * as types from './mutation-type'

export default {
  addActionRecording({ commit }, item){
    commit(types.ADD_ACTION_RECORDING, item)
  },
  initAllRecording({ commit }){
    commit(types.INIT_ALL_RECORDING)
  },
  editActionRecording({ commit }, params){
    commit(types.EDIT_ACTION_RECORDING, params)
  },
  delActionRecording( {commit }, index){
    commit(types.DEL_ACTION_RECORDING, index)
  },
  initActionRecording({ commit }, params){
    commit(types.INIT_ACTION_RECORDING, params)
  },
  setActionDetail({ commit }, params){
    commit(types.SET_ACTION_DETAIL, params)
  },
  initAllAction({commit}){
    commit(types.INIT_ALL_ACTION)
  },
  delMuscleAction({commit}, params){
    commit(types.DEL_MUSCLES_ACTION, params)
  },
  addMuscleAction({commit}, params){
    commit(types.ADD_MUSCLES_ACTION, params)
  }
}