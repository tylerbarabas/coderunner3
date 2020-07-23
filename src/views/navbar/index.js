import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="navbar is-primary ml-5" role="navigation" aria-label="main navigation" style={{height: '60px'}}>
      <div className="columns is-vcentered is-desktop is-mobile" style={{width: '100%'}}>
        <div className="column">
          <FontAwesomeIcon icon={faHome} size='2x' />
        </div>
        <div className="column is-hidden-touch is-size-4">
          For advanced features, <a
              href="http://acme.codes/contact"
              className="has-text-white"
              style={{textDecoration: 'underline'}}
            >contact us</a>
        </div>
        <div className="column has-text-right pt-5 pr-0">
          <img src="/logo.png" alt="Coderunner | Animated QR Code Generator"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
