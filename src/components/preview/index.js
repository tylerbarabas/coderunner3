import React from 'react'
import PropTypes from 'prop-types'

export default class Preview extends React.Component {
  getPreview(src){
    if (src.indexOf('/frames/1') !== -1) {
      return (
        <figure className="image is-square">
          <img
            src={src}
          />
        </figure>
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
