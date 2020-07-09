import React, {
  useEffect,
  useContext,
} from 'react'
import { ResponsiveContext } from '../../contexts/responsive'

const ResponsiveUpdater = props => {
  const {
    responsive,
    updateResponsive,
  } = useContext(ResponsiveContext)
  const _updateResponsive = e => {
    const {
      innerWidth,
    } = e.target
    updateResponsive(innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize',_updateResponsive)
  },[])
  return null
}

export default ResponsiveUpdater
