import {
  useEffect,
  useContext,
} from 'react'
import { ResponsiveContext } from '../../contexts/responsive'

const ResponsiveUpdater = props => {
  const {
    updateResponsive,
  } = useContext(ResponsiveContext)
  useEffect(()=>{
    const fakeEvent = {
      target: {
        innerWidth: window.innerWidth
      }
    }
    const _updateResponsive = e => {
      const {
        innerWidth,
      } = e.target
      updateResponsive(innerWidth)
    }
    _updateResponsive(fakeEvent)
    window.addEventListener('resize',_updateResponsive)
  },[updateResponsive])
  return null
}

export default ResponsiveUpdater
