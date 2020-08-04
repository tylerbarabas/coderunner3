export default (state, action) => {
  switch (action.type) {
  case 'NEXT':
    return {
      ...state,
      step: state.step + 1,
    }
  case 'BACK':
    return {
      ...state,
      step: state.step -1,
    }
  case 'START':
    return {
      ...state,
      step: 1,
    }
  default:
    return state
  }
}
