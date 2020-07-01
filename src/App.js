import React from 'react'
import Navbar from './components/navbar'
import QrCodeProvider from './contexts/qrcode'
import Wrapper from './views/wrapper'

const App = () => {
  return (
    <QrCodeProvider>
      <Navbar />
      <Wrapper />
    </QrCodeProvider>
  )
}

export default App
