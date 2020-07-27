import React, { useContext } from 'react'
import Preview from '../../views/preview'
import StepOne from '../../views/step-one'
import NextButton from '../../components/next-button'
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
      <div className={`row-container fullscreen ${hidden.landscape}`} style={{minHeight: 400}}>
        <div className="row-half has-background-white">
          <Preview />
        </div>
        <div className="row-half">
          <StepOne />
          <NextButton />
        </div>
      </div>
      <div className={`col-container fullscreen mt-4 ${hidden.portrait}`} style={{minHeight: 700}}>
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
