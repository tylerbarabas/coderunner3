import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div className="columns is-vcentered is-desktop is-mobile" style={{width: '102%'}}>
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
        <div className="column has-text-right pt-5">
          <img src="/logo.png" alt="Coderunner | Animated QR Code Generator"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
