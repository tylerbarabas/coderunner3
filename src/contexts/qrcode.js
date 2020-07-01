import React, { createContext, useReducer, useEffect } from 'react'
import qrCodeReducer from '../reducers/qrcode'

export const QrCodeContext = createContext()

const DEFAULT = {
  str: '',
}

const QrCodeProvider = props => {
  const [ data, dispatch ] = useReducer(qrCodeReducer, DEFAULT)

  useEffect(()=>{
    console.log('data changed')  
  }, [data])

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

export default QrCodeProvider
