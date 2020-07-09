import React from 'react'
import Navbar from './components/navbar'
import QrCodeProvider from './contexts/qrcode'
import ResponsiveProvider from './contexts/responsive'
import Wrapper from './views/wrapper'

const App = () => {
  return (
    <ResponsiveProvider>
      <QrCodeProvider>
        <Navbar />
        <Wrapper />
      </QrCodeProvider>
    </ResponsiveProvider>
  )
}

export default App
