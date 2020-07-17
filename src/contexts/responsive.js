import React, {
  createContext,
  useReducer,
} from 'react'
import responsiveReducer from '../reducers/responsive'

export const ResponsiveContext = createContext()

const DEFAULT = {
  isMobile: false,
  isTablet: false,
  isTouch: false,
  isDesktop: false,
  isWideScreen: false,
  isFullHD: false,
}

const _makeObject = innerWidth =>{
  let {
    isMobile,
    isTablet,
    isTouch,
    isDesktop,
    isWideScreen,
    isFullHD,
  } = DEFAULT
  if (innerWidth <= 768) {
    isMobile = true
    isTouch = true
  } else if (innerWidth > 768 && innerWidth < 1024) {
    isTablet = true
    isTouch = true
  } else if (innerWidth >= 1024) {
    isDesktop = true
    if (innerWidth >= 1216) isWideScreen = true
    if (innerWidth >= 1408) isFullHD = true
  }
  return {
    isMobile,
    isTablet,
    isTouch,
    isDesktop,
    isWideScreen,
    isFullHD,
  }
}


const ResponsiveProvider = props => {
  const [ responsive, dispatch ] = useReducer(responsiveReducer, DEFAULT)

  const updateResponsive = innerWidth => {
    const obj = _makeObject(innerWidth)
    dispatch({
      type: 'UPDATE',
      ...obj,
    })
  }

  return (
    <ResponsiveContext.Provider
      value={{responsive, updateResponsive}}
    >
      {props.children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveProvider
