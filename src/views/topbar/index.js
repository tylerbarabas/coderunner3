import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default class TopBar extends React.Component {
  render(){
    return(
      <nav
        role="navigation"
        aria-label="main navigation"
        style={{position: 'fixed', right: '0', top: '0', left: '0', transition: 'left 500ms'}}
      >
        <div className="columns is-desktop is-mobile is-vcentered has-text-white" style={{height: '89px'}}>
          <div className="column is-one-quarter p-l-lg">
            <a href="http://acme.codes" className="has-text-white">
              <FontAwesomeIcon icon={faHome} size={'2x'} />
            </a>
          </div>
          <div className="column is-one-half">
            <p className="is-size-5 has-text-weight-bold">
              For advanced features, <a href="https://acme.codes/contact" className="has-text-white has-text-underlined">contact us</a>
            </p>
          </div>
          <div className="column is-one-quarter has-text-right p-r-lg">
            <img src="/AcmeLogo.png" alt="Acme Logo" />
          </div>
        </div>
      </nav>
    )
  }
}
