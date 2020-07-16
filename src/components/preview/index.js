import React, {
  useContext,
} from 'react'
import { QrCodeContext } from  '../../contexts/qrcode'

const _getPreview = qrCode => {
  const {
    id,
    animation,
  } = qrCode
  if (step < 3) {
    return (
      <div
        style={{
          padding: '15%',
        }}
      >
        <figure
          className="image is-1by1"
        >
          <img
            src={src}
          />
        </figure>
      </div>
    )
  }
  return (
    <video
      src={src}
      autoPlay
      playsInline
      loop
      muted
    />
  )
}

const Preview = props => {
  const {
    qrCode,
  } = useContext(QrCodeContext)
  return (
    <div className="columns is-vcentered is-fullheight">
      <div className="column  has-text-centered">
        {_getPreview(qrCode)}
        {qrCode.str}
      </div>
    </div> 
  )
}

export default Preview
