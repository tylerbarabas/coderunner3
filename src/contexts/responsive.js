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

const ResponsiveProvider = props => {
  const [ responsive, dispatch ] = useReducer(responsiveReducer, DEFAULT)
  const getObject = (innerWidth, innerHeight) =>{
    let obj = DEFAULT
    
    return obj
  }
  const updateResponsive = (innerWidth, innerHeight) => {
    const obj = getObject(innerWidth, innerHeight)
    dispatch({
      action: 'UPDATE',
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
