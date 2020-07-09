import React from 'react'
import PropTypes from 'prop-types'

export default class Preview extends React.Component {
  getPreview(src){
    if (src.indexOf('/frames/1') !== -1) {
      return (
        <div
          style={{
            padding: '15%',
          }}
        >
          <figure className="image is-1by1"
          >
            <img
              src={src}
            />
          </figure>
        </div>
      )
    }
    return (
      <video
        src={src}
        autoPlay
        playsInline
        loop
        muted
      />
    )
  }
  render(){
    const {
      src,
    } = this.props
    return (
      <div className="columns is-vcentered is-fullheight">
        <div className="column  has-text-centered">
          {this.getPreview(src)}
        </div>
      </div> 
    )
  }
}

Preview.propTypes = {
  src: PropTypes.string,
}
