import React, {
  useEffect,
} from 'react'

const ResponsiveUpdater = props => {
  const updateResponsive = e => {
    const {
      innerHeight,
      innerWidth,
    } = e.target
    console.log('update responsive', innerWidth, innerHeight)
  }
  useEffect(()=>{
    window.addEventListener('resize',updateResponsive)
  },[])
  return null
}

export default ResponsiveUpdater
