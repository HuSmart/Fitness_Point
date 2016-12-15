export default {
  getSelectedParams(state){
    return state.selectedParams
  },
  getActionDescript(state){
    // debugger
    let selectedAction = state.selectedParams.action
    let result  = state.actionList[state.selectedParams.muscle].filter(action => {
      return action.name === selectedAction
    })
    state.selectedParams.desc = result.desc
    return result
  },
  searchActionInRecorde(state){
    return state.recordeList[state.selectedParams.action] ? true : false
  },
  getPlanActions(state){
    state.planList[state.selectedParams.name][state.selectedParams.muscle] = state.planList[state.selectedParams.name][state.selectedParams.muscle] || []
    return state.planList[state.selectedParams.name][state.selectedParams.muscle] 
  }
}

  