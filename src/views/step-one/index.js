import React, {
  useContext,
} from 'react'
import { QrCodeContext } from '../../contexts/qrcode'
import { ResponsiveContext } from '../../contexts/responsive'

const StepOne = () => {
  const {
    qrCode,
    qrCodeMethods,
  } = useContext(QrCodeContext)
  const {
    responsive,
  } = useContext(ResponsiveContext)
  const { str } = qrCode
  const { updateStr } = qrCodeMethods
  return (
    <div className="columns is-fullheight is-vcentered">
      <div className="column">
        <p className="is-size-2">4 steps to animate your code!</p>
        <p className="is-size-2">Set your scan destination?</p>
        <input
          type="text"
          placeholder="www.example.com"
          className="input is-inline"
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
