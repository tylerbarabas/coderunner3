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
  step: 1,
  animation: null,
  progress: 0,
  stage: null,
}

let throttle = null

const QrCodeProvider = props => {
  const [ qrCode, dispatch ] = useReducer(qrCodeReducer, DEFAULT)
  
  const apicall = async args => {
    updateCallStatus('requesting')
    const r = await Service.createStaticCode(args)
    let json = null
    if (r.ok) {
      json = await r.json()
      updateCallStatus('success', json.orderNumber)
    } else {
      updateCallStatus('fail')
    }
  }

  const updateCallStatus = (s, id) => {
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
    if (throttle) clearTimeout(throttle)
    throttle = setTimeout(()=>{
      if (qrCode.str !== '') {
        const params = {
          msg: qrCode.str,
        }
        apicall(params)
      }
    }, 500)
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
