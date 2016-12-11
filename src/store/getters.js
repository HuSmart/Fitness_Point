export default {
  getSelectedParams(state){
    return state.state.selectedParams
  },
  getActionDescript(state){
    let muscle = state.selectedParams.muscle
    let selectedAction = state.selectedParams.action
    return state.actionList[muscle].filter(action => {
      return action.name === selectedAction
    })
  }
}

  