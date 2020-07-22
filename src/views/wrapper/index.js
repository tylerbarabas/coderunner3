import React, { useContext } from 'react'
import Preview from '../../views/preview'
import StepOne from '../../views/step-one'
import { ResponsiveContext } from '../../contexts/responsive'
import './index.scss'

const Wrapper = () => {
  const { responsive } = useContext(ResponsiveContext)
  const { orientation } = responsive
  const hidden = {
    landscape: (orientation === 'landscape')?'':'is-hidden',
    portrait: (orientation === 'portrait')?'':'is-hidden',
  }  
  return (
    <div>
      <div className={`row-container ${hidden.landscape}`}>
        <div className="row-half has-background-white">
          <Preview />
        </div>
        <div className="row-half">
          <StepOne />
        </div>
      </div>
      <div className={`col-container ${hidden.portrait}`}>
        <div className="col-half has-background-white">
          <Preview />
        </div>
        <div className="col-half">
          <StepOne />
        </div>
      </div>
    </div>
  )
}

export default Wrapper
