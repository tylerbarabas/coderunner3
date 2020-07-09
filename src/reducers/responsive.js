export default (state, action) => {
  switch (action.type) {
  case 'UPDATE':
    return {
      ...state,
      isMobile: action.isMobile,
      isTouch: action.isTouch,
      isDesktop: action.isDesktop,
      isWideScreen: action.isWideScreen,
      isFullHD: action.isFullHD,
    }
  default:
    return state
  }
}
