import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class Tooltip extends React.Component {
  render(){
    const {
      height,
      width,
    } = this.props.size
    const {
      top,
      left,
    } = this.props.position
    const {
      content,
      isActive,
    } = this.props
    return (
      <div
        className="tooltip"
        id="tooltip"
        style={{
          height,
          width,
          top,
          left,
          display: isActive ? 'block' : 'none',
        }}
      >
        {content}
      </div> 
    )
  }
}

Tooltip.propTypes = {
  content: PropTypes.element,
  isActive: PropTypes.bool,
  size: PropTypes.object,
  position: PropTypes.object,
}
