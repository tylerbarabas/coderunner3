import React from 'react'
import Preview from '../../components/preview'
import StepOne from '../../views/step-one'

class Wrapper extends React.Component {
  render() {
    const getPreviewUri = id => `https://api.acme.codes/orders/${id}/frames/1`
    return (
      <div className="section is-fullheight">
        <div className="columns is-fullheight">
          <div className="column is-half has-background-white">
            <Preview
              src={getPreviewUri('1593144341_QZB842DI')}
            />
          </div>
          <div className="column is-half has-text-white has-text-centered">
            <StepOne />
          </div>
        </div>
      </div>
    )
  }
}

export default Wrapper
