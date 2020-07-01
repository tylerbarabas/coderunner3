import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { QrCodeContext } from '../../contexts/qrcode'

const Navbar = () => {
  const { data, methods } = useContext(QrCodeContext)
  console.log('data', data, 'methods', methods)
  return (
    <nav className="navbar is-primary px-6" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://acme.codes">
            <FontAwesomeIcon icon={faHome} size='2x' />
          </a>
          <div className="columns is-vcentered ml-6 pl-6">
            <div className="column is-size-4 ml-6 pl-6">
              For advanced features, <a
                  href="http://acme.codes/contact"
                  className="has-text-white"
                  style={{textDecoration: 'underline'}}
                >contact us</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <img src="/logo.png" alt="Coderunner | Animated QR Code Generator" width="112" height="28" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
