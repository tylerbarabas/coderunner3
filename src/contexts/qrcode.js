import React, {
  createContext,
  useReducer,
  useEffect,
} from 'react'
import Service from '../service'
import qrCodeReducer from '../reducers/qrcode'

export const QrCodeContext = createContext()

const DEFAULT = {
  orderRequesting: false,
  orderError: false,
  progressRequesting: false,
  progressError: false,
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

  const _progressLoop = async orderNumber => {
    dispatch({
      type: 'PROGRESS_REQUESTING',
    })
    const r = await Service.checkProgress(orderNumber)
    if (r.ok) {
      const data = await r.json()
      dispatch({
        type: 'PROGRESS_SUCCESS',
        data,
      })
    } else {
      dispatch({
        type: 'PROGRESS_FAIL'
      })
    }
  }
  
  const _makeOrder = async args => {
    dispatch({
      type: 'ORDER_REQUESTING',
    })
    const r = await Service.createStaticCode(args)
    let json = null
    if (r.ok) {
      json = await r.json()
      dispatch({
        type: 'ORDER_SUCCESS',
        id: json.orderNumber,
      })
      _progressLoop(json.orderNumber)
    } else {
      dispatch({
        type: 'ORDER_FAIL',
      })
    }
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
        _makeOrder(params)
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
