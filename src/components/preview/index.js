import React, {
  useContext,
} from 'react'
import { QrCodeContext } from  '../../contexts/qrcode'
import Service from '../../service'

const { DOMAIN } = Service
const _getFirstFrame = id => `${DOMAIN}/orders/${id}/frames/1`
const _getMp4 = id => `${DOMAIN}/orders/${id}/mp4`
const _getPreview = qrCode => {
  const {
    id,
    animation,
    step,
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
            src={_getFirstFrame(id)}
          />
        </figure>
      </div>
    )
  }
  return (
    <video
      src={_getMp4(id)}
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
