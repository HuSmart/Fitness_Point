import * as types from './mutation-type'

export default {
  addActionRecording({ commit }, item){
    commit(types.ADD_ACTION_RECORDING, item)
  },
  initActionRecording({ commit }){
    commit(types.INIT_ACTION_RECORDING)
  },
  editActionRecording({ commit }, params){
    commit(types.EDIT_ACTION_RECORDING, params)
  }
}