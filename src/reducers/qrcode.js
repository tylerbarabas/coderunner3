export default (state, action) =>{
  switch(action.type){
    case 'ORDER_REQUESTING':
      return {
        ...state,
        orderRequesting: true,
        orderError: false,
      }
    case 'ORDER_SUCCESS':
      return {
        ...state,
        orderRequesting: false,
        orderError: false,
        id: action.id,
      }
    case 'ORDER_FAIL':
      return {
        ...state,
        orderRequesting: false,
        orderError: true,
      }
    case 'PROGRESS_REQUESTING':
      return {
        ...state,
        progressRequeting: true,
        progressError: false,
      }
    case 'PROGRESS_SUCCESS':
      return {
        ...state,
        progressRequesting: false,
        progressError: false,
      }
    case 'PROGRESS_FAIL':
      return {
        ...state,
        progressRequesting: false,
        progressError: true,
      }
    case 'UPDATE_STRING':
      return {
        ...state,
        str: action.str,
      }
    case 'UPDATE_ID':
      return {
        ...state,
        id: action.id,
      }
    default:
      return state
  }
}
