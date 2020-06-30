import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class ProgressBar extends React.Component {
  render(){
    const { percentComplete } = this.props
    return (
      <div className="progress-bar is-fullwidth has-background-light">
        <div className="progress-bar-inner has-background-success" style={{width: `${percentComplete}%`}} />
      </div>
    )
  }
}

ProgressBar.propTypes = {
  percentComplete: PropTypes.number,
  showZero: PropTypes.bool,
}
