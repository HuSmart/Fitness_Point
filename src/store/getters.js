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
  }
}

  