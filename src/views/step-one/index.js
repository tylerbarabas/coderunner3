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
  const {
    isMobile,
  } = responsive
  const { str } = qrCode
  const { updateStr } = qrCodeMethods
  const font = {
    large: (isMobile) ? 'is-size-4' : 'is-size-2',
    small: (isMobile) ? 'is-size-5' : 'is-size-4',
  }
  return (
    <div className="columns is-fullheight is-vcentered">
      <div className="column">
        <p className={font.large}>4 steps to animate your code!</p>
        <p className={`${font.large} mb-6`}>Set your scan destination?</p>
        <input
          type="text"
          placeholder="www.example.com"
          className={`input ${font.small}`}
          onChange={e=>{
            const { value } = e.target
            updateStr(value)
          }}
          defaultValue={str}
          style={{maxWidth: '300px'}}
        />
        <p
          className={`${font.small} mt-6`}
          style={{color: '#c2c4ff'}}
        >Website? Social? Coupon?</p>
      </div>
    </div>
  )
}

export default StepOne
