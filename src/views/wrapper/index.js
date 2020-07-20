import React from 'react'
import Preview from '../../views/preview'
import StepOne from '../../views/step-one'

const Wrapper = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half has-background-white">
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
