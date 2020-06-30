import React from 'react'
import PropTypes from 'prop-types'
import './index.scss' 

export default class Modal extends React.Component {
  componentDidUpdate(){
    const modalCard = document.getElementById('modal-card')
    const { height } = modalCard.getBoundingClientRect()
    modalCard.style.top = `-${height/8}px`
  }
  render(){
    let {
      isActive = false,
      isDisabled = false,
      headerText = 'Header Text',
      modalContent = null,
      primaryAction = null,
      closeAction = null,
      hideHeader = true,
      hideFooter = true,
      width = '',
      shouldBeFullWidth = false,
    } = this.props

    if (shouldBeFullWidth) width = '100%'

    return (
      <div className={`basic-modal modal ${(isActive)?'is-active':''}`}>
        <div className="modal-background" />
        <div className="modal-card animated fadeIn" id="modal-card" style={{width}}>
          <header className={`modal-card-head ${(hideHeader)?'is-hidden':''}`}>
            <p className="is-size-4">{headerText}</p>
          </header>
          <section className="modal-card-body">
            {(typeof modalContent === 'function')?modalContent():''}
          </section>
          <footer className={`modal-card-foot ${(hideFooter)?'is-hidden':''}`}>
            <button
              className="button close"
              onClick={()=>{
                closeAction()
              }}
            >Close</button>
            <button
              className={'button is-primary primary-action'}
              onClick={()=>{
                primaryAction()
              }}
              disabled={isDisabled}
            >Update</button>
          </footer>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  headerText: PropTypes.string,
  modalContent: PropTypes.func,
  closeAction: PropTypes.func,
  primaryAction: PropTypes.func,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
  width: PropTypes.string,
  shouldBeFullWidth: PropTypes.bool,
}
