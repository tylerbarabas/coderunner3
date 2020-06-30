import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class BigLoading extends React.Component {
  render(){
    return (
      <div className="big-loading columns">
        <div className="column is-one-fifth is-offset-two-fifths animated fadeIn has-text-centered p-t-lg">
          <p className="loading-text">{this.props.msg || 'Loading...'}</p>
        </div>
      </div>
    )
  }
}

BigLoading.propTypes = {
  msg: PropTypes.string
}
