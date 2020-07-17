import React, {
  useContext,
} from 'react'
import { QrCodeContext } from  '../../contexts/qrcode'
import Service from '../../service'

const { DOMAIN, DEFAULT } = Service
const _getFirstFrame = id => `${DOMAIN}/orders/${id}/frames/1`
const _getMp4 = id => `${DOMAIN}/orders/${id}/mp4`

const _getPreview = qrCode => {
  const {
    id,
    animation,
    step,
  } = qrCode
  let src = DEFAULT
  if (id && !animation) {
    src = _getFirstFrame(id)
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
  if (id) src = _getMp4(id)
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
