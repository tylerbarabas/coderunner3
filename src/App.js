import React from 'react'
import Navbar from './components/navbar'
import QrCodeProvider from './contexts/qrcode'

const App = () => {
  return (
    <QrCodeProvider>
      <Navbar />
    </QrCodeProvider>
  )
}

export default App
