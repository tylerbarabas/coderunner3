const qrCodeReducer = (state, action) =>{
  switch(action.type){
    case 'UPDATE_STRING':
      return {
        ...state,
        str: action.str,
      }
    default:
      return state
  }
}

export default qrCodeReducer
