export default (state, action) => {
  switch (action.type) {
  case 'UPDATE':
    return {
      ...state,
      isMobile: action.isMobile,
      isTablet: action.isTablet,
      isTouch: action.isTouch,
      isDesktop: action.isDesktop,
      isWideScreen: action.isWideScreen,
      isFullHD: action.isFullHD,
    }
  default:
    return state
  }
}
