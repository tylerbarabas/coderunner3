import React, {
  useContext,
} from 'react'
import { QrCodeContext } from  '../../contexts/qrcode'
import { ResponsiveContext } from '../../contexts/responsive'
import Service from '../../service'

const { DOMAIN, DEFAULT } = Service
const _getFirstFrame = id => `${DOMAIN}/orders/${id}/frames/1`
const _getMp4 = id => `${DOMAIN}/orders/${id}/mp4`

const _keepTrying = e => {
  const { src } = e.target
  e.target.src = null
  e.target.src = src
}
const _getPreview = qrCode => {
  const {
    responsive,
  } = useContext(ResponsiveContext)
  const {
    isTouch,
    isMobile,
  } = responsive
  let size = 'is-1by1'
  if (isTouch) {
    size = 'is-256by256'
    if (isMobile) size = 'is-128by128'
  }
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
          className={`image ${size} m0auto`}
        >
          <img
            src={src}
            onError={_keepTrying}
          />
        </figure>
      </div>
    )
  }
  if (id) src = _getMp4(id)
  return (
    <div
      style={{
        padding: '15%',
      }}
    >
      <figure
        className={`image ${size} m0auto`}
      >
        <video
          src={src}
          autoPlay
          playsInline
          loop
          muted
          className="has-ratio"
          onError={_keepTrying}
        />
      </figure>
    </div>
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
