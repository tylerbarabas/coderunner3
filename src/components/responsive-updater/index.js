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
  console.log('responsive', responsive)
  const _updateResponsive = e => {
    const {
      innerHeight,
      innerWidth,
    } = e.target
    updateResponsive(innerWidth, innerHeight)
  }
  useEffect(()=>{
    window.addEventListener('resize',_updateResponsive)
  },[])
  return null
}

export default ResponsiveUpdater
