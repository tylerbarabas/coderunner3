import React, {
  useContext,
} from 'react'
import { QrCodeContext } from '../../contexts/qrcode'

const StepOne = () => {
  const {
    qrCode,
    qrCodeMethods,
  } = useContext(QrCodeContext)
  const { str } = qrCode
  const { updateStr } = qrCodeMethods
  return (
    <div className="columns is-fullheight is-vcentered is-hidden-mobile">
      <div className="column">
        <p className="is-size-2">4 steps to animate your code!</p>
        <p className="is-size-2">Set your scan destination?</p>
        <input
          type="text"
          placeholder="www.example.com"
          className="input is-inline"
          style={{
            height: '50px',
            width: '300px',
            fontSize: '20px',
          }}
          onChange={e=>{
            const { value } = e.target
            updateStr(value)
          }}
          defaultValue={str}
        />
        <p
          className="is-size-4"
          style={{color: '#c2c4ff'}}
        >Website? Social? Coupon?</p>
      </div>
    </div>
  )
}

export default StepOne
