import React from 'react'
import Preview from '../../views/preview'
import StepOne from '../../views/step-one'

const Wrapper = () => {
  return (
    <div className="level">
      <div className="level-item has-background-white">
        <Preview />
      </div>
      <div className="level-item has-text-white has-text-centered">
        <StepOne />
      </div>
    </div>
  )
}

export default Wrapper
