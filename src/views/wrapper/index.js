import React from 'react'
import Preview from '../../components/preview'

class Wrapper extends React.Component {
  render() {
    return (
      <div className="section is-fullheight">
        <div className="columns is-fullheight px-6">
          <div className="column is-half has-background-white">
            <Preview
              src="https://api.acme.codes/orders/1593144341_QZB842DI/frames/1"
            />
          </div>
          <div className="column is-half">
          </div>
        </div>
      </div>
    )
  }
}

export default Wrapper
