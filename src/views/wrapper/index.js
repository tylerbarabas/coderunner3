import React from 'react'
import Preview from '../../components/preview'

class Wrapper extends React.Component {
  render() {
    return (
      <div className="columns is-fullheight p-l-lg p-r-lg">
        <div className="column is-half has-background-white">
          <Preview
            src="https://api.acme.codes/orders/1593144341_QZB842DI/frames/1"
          />
        </div>
        <div className="column is-half">
        </div>
      </div>
    )
  }
}

export default Wrapper
