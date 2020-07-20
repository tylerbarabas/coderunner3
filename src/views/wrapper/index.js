import React from 'react'
import Preview from '../../views/preview'
import StepOne from '../../views/step-one'

const Wrapper = () => {
  return (
    <div className="container is-fluid pt-5" style={{height: '90%'}}>
      <div className="columns is-desktop is-vcentered is-fullheight">
        <div className="column is-half-desktop has-background-white">
          <Preview />
        </div>
        <div className="column is-half-desktop has-text-white has-text-centered">
          <StepOne />
        </div>
      </div>
    </div>
  )
}

export default Wrapper
