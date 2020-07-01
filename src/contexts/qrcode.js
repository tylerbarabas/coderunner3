import React, { createContext, useState } from 'react'

const QrCodeContext = createContext('qrcode')

const QrCode = props => {
  const [ str, setStr ] = useState('')
  return (
    <QrCodeContext.Provider>
      {props.children}
    </QrCodeContext.Provider>
  )
}
