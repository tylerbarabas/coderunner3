import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { QrCodeContext } from '../../contexts/qrcode'

const Navbar = () => {
  const { qrCode, qrCodeMethods } = useContext(QrCodeContext)
  const {
    updateStr,
  } = qrCodeMethods
  const buttonClicked = ()=>{
    const newStr = qrCode.str + '1'
    updateStr(newStr)
  }
  return (
    <nav className="navbar is-primary px-6" role="navigation" aria-label="main navigation">
      <div className="navbar-brand" style={{width: '100%'}}>
        <a className="navbar-item" href="https://acme.codes">
          <FontAwesomeIcon icon={faHome} size='2x' />
        </a>
        <div className="columns is-vcentered ml-6 pl-6 is-hidden-touch">
          <div className="column is-size-4 ml-6 pl-6">
            For advanced features, <a
                href="http://acme.codes/contact"
                className="has-text-white"
                style={{textDecoration: 'underline'}}
              >contact us</a>
          </div>
        </div>
      </div>
        <div className="is-pulled-right">
          <div className="navbar-item">
            <img src="/logo.png" alt="Coderunner | Animated QR Code Generator" style={{height: '50px', width: 'auto'}}/>
          </div>
          <button
            onClick={buttonClicked}
            type="button"
          >
            Test
          </button>
        </div>
    </nav>
  )
}

export default Navbar
