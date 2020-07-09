import React from 'react'
import Navbar from './components/navbar'
import QrCodeProvider from './contexts/qrcode'
import ResponsiveProvider from './contexts/responsive'
import ResponsiveUpdater from './components/responsive-updater'
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
