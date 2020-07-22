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
  const { target } = e
  const { src } = target
  setTimeout(()=>{
    target.src = src
  },500)
}
const _getPreview = qrCode => {
  const {
    responsive,
  } = useContext(ResponsiveContext)
  const {
    isMobile,
    isTouch,
    orientation,
  } = responsive
  const height = (orientation === 'landscape') ? '' : ''
  let size = 'is-512by512'
  if (isTouch) size = 'is-256by256'
  if (isMobile) size = 'is-96by96'
  const {
    id,
    animation,
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
          className={`image ${size}`}
        >
          <img
            src={src}
            onError={_keepTrying}
            alt="Preview"
            style={{
              height,
              width: height,
            }}
          />
        </figure>
      </div>
    )
  }
  if (id) src = _getMp4(id)
  return (
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
        style={{
          height,
          width: height,
        }}
      />
    </figure>
  )
}

const _getProgress = qrCode => {
  return (
    <p>{qrCode.progress}</p>
  )
}

const Preview = props => {
  const {
    qrCode,
  } = useContext(QrCodeContext)
  return (
    <section className="container fluid">
      <div className="columns is-vcentered">
        <div className="column has-text-centered">
          {(qrCode.progress < 100) ? _getProgress(qrCode) : _getPreview(qrCode)}
          {qrCode.str}
        </div>
      </div>
    </section>
  )
}

export default Preview
