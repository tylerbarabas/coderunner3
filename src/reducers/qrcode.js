export default (state, action) =>{
  switch(action.type){
    case 'ORDER_REQUESTING':
      return {
        ...state,
        isRequesting: true,
        isError: false,
      }
    case 'ORDER_SUCCESS':
      return {
        ...state,
        hasRequested: true,
        isRequesting: false,
        isError: false,
        id: action.id,
      }
    case 'ORDER_FAIL':
      return {
        ...state,
        hasRequested: true,
        isRequesting: false,
        isError: true,
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
