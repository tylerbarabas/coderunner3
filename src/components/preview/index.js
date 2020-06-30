import React from 'react'
import PropTypes from 'prop-types'

const MIN_WIDTH = '70%'
export default class Preview extends React.Component {
  getPreview(src){
    if (src.indexOf('/frames/1') !== -1) {
      return (
        <img
          src={src}
          style={{
            minWidth: MIN_WIDTH,
          }}
        />
      )
    }
    return (
      <video
        src={src}
        autoPlay
        playsInline
        loop
        muted
        style={{
          minWidth: MIN_WIDTH,
        }}
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
