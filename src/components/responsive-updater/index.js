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
    const fakeEvent = {
      target: {
        innerWidth: window.innerWidth
      }
    }
    _updateResponsive(fakeEvent)
    window.addEventListener('resize',_updateResponsive)
  },[])
  return null
}

export default ResponsiveUpdater
