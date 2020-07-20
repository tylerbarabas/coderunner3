import React, { useContext } from 'react'
import Preview from '../../views/preview'
import StepOne from '../../views/step-one'
import { ResponsiveContext } from '../../contexts/responsive'

const Wrapper = () => {
  const { responsive } = useContext(ResponsiveContext)
  const maxHeight = (responsive.orientation === 'landscape') ? '100%' : '70%'
  return (
    <div className="section" style={{height: '95%'}}>
      <div className="columns is-fullheight">
        <div className="column is-half has-background-white" style={{maxHeight}}>
          <Preview />
        </div>
        <div className="column is-half has-text-white has-text-centered">
          <StepOne />
        </div>
      </div>
    </div>
  )
}

export default Wrapper
