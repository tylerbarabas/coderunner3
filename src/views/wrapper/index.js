import React from 'react'
import Preview from '../../components/preview'

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
            <div className="columns is-fullheight is-vcentered is-hidden-mobile">
              <div className="column">
                <p className="is-size-2">4 steps to animate your code!</p>
                <p className="is-size-2">Set your scan destination?</p>
                <input
                  type="text"
                  placeholder="www.example.com"
                  className="input is-inline"
                  style={{
                    height: '50px',
                    width: '300px',
                    fontSize: '20px',
                  }}
                />
                <p
                  className="is-size-4"
                  style={{color: '#c2c4ff'}}
                >Website? Social? Coupon?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Wrapper
