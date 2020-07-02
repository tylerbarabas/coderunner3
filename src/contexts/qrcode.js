import React, {
  createContext,
  useReducer,
  useEffect,
} from 'react'
import Service from '../service'
import qrCodeReducer from '../reducers/qrcode'

export const QrCodeContext = createContext()

const DEFAULT = {
  hasRequested: false,
  isRequesting: false,
  id: null,
  str: '',
}

const QrCodeProvider = props => {
  const [ qrCode, dispatch ] = useReducer(qrCodeReducer, DEFAULT)

  const _updateCallStatus = (s, id) => {
    let obj = {}
    switch(s){
      case 'success':
        obj = {
          type: 'ORDER_SUCCESS',
          id,
        }
      break
      case 'fail':
        obj = {
          type: 'ORDER_FAIL',
        }
      break
      case 'requesting':
      default:
        obj = {
          type: 'ORDER_REQUESTING',
        }
      break
    }
    dispatch(obj)
  }

  const updateStr = str => {
    dispatch({
      type: 'UPDATE_STRING',
      str,
    })
  }

  const qrCodeMethods = {
    updateStr,
  }

  useEffect(()=>{
    const apicall = async args => {
      _updateCallStatus('requesting')
      const r = await Service.createStaticCode(args)
      let newid = null
      if (r.ok) {
        newid = await r.json()
        _updateCallStatus('success', newid)
      } else {
        _updateCallStatus('fail')
      }
    }
    if (qrCode.str !== '') {
      const params = {
        msg: qrCode.str,
      }
      apicall(params)
    }
  }, [qrCode.str])

  return (
    <QrCodeContext.Provider 
      value={{qrCode, qrCodeMethods}}
    >
      {props.children}
    </QrCodeContext.Provider>
  )
}

export default QrCodeProvider
