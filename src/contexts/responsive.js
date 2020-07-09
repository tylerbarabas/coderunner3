import React, {
  createContext,
  useReducer,
} from 'react'
import responsiveReducer from '../reducers/responsive'

export const ResponsiveContext = createContext()

const DEFAULT = {
  isMobile: false,
  isTouch: false,
  isDesktop: false,
  isWideScreen: false,
  isFullHD: false,
}

const ResponsiveProvider = props => {
  const [ responsive, dispatch ] = useReducer(responsiveReducer, DEFAULT)

  const updateResponsive = r => {
    dispatch({
      action: 'UPDATE',
      ...r
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
