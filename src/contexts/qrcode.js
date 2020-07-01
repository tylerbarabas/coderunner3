import React, { createContext, useState } from 'react'
import qrCodeReducer from '../reducers/qrcode'

const QrCodeContext = createContext('qrcode')

const DEFAULT = {
  str: '',
}

const QrCodeContextProvider = props => {
  const [ data, dispatch ] = useReducer(qrCodeReducer, DEFAULT)

  const updateStr = str => {
    dispatch({
      type: 'UPDATE_STRING',
      str,
    })
  }

  const methods = {
    updateStr,
  }

  return (
    <QrCodeContext.Provider 
      value={{data, methods}}
    >
      {props.children}
    </QrCodeContext.Provider>
  )
}
