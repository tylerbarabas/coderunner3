import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class Preview extends React.Component {
  getPreview(src){
    if (src.indexOf('/frames/1') !== -1) {
      return (
        <img
          src={src}
          className="preview"
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
      />
    )
  }
  render(){
    const {
      src,
    } = this.props
    return (
      <div className="columns is-vcentered is-fullheight preview">
        <div className="column  has-text-centered preview">
          {this.getPreview(src)}
        </div>
      </div> 
    )
  }
}

Preview.propTypes = {
  src: PropTypes.string,
}
