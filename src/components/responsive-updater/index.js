import {
  useEffect,
  useContext,
  useCallback,
} from 'react'
import { ResponsiveContext } from '../../contexts/responsive'
let count = 0

const ResponsiveUpdater = props => {
  const {
    updateResponsive,
  } = useContext(ResponsiveContext)
  const _updateResponsive = useCallback(e => {
    const {
      innerWidth,
    } = e.target
    updateResponsive(innerWidth)
  },[updateResponsive])
  useEffect(()=>{
    if (count > 0) return 
    count += 1
    const fakeEvent = {
      target: {
        innerWidth: window.innerWidth
      }
    }
    _updateResponsive(fakeEvent)
    window.addEventListener('resize',_updateResponsive)
  },[_updateResponsive])
  return null
}

export default ResponsiveUpdater
