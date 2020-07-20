import React from 'react'
import QrCodeProvider from './contexts/qrcode'
import ResponsiveProvider from './contexts/responsive'
import ResponsiveUpdater from './views/responsive-updater'
import Navbar from './views/navbar'
import Wrapper from './views/wrapper'

const App = () => {
  return (
    <ResponsiveProvider>
      <QrCodeProvider>
        <Navbar />
        <Wrapper />
        <ResponsiveUpdater />
      </QrCodeProvider>
    </ResponsiveProvider>
  )
}

export default App
