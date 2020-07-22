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
    isFullHD,
    isWideScreen,
    isMobile,
    isTouch,
    orientation,
  } = responsive
  let size = 'is-256by256'
  if (isFullHD) size = 'is-512by512'
  const {
    id,
    animation,
  } = qrCode
  let src = DEFAULT
  if (id && !animation) {
    src = _getFirstFrame(id)
    return (
        <figure
          className="image"
        >
          <img
            src={src}
            onError={_keepTrying}
            alt="Preview"
            className={`${size}`}
          />
        </figure>
    )
  }
  if (id) src = _getMp4(id)
  return (
    <figure
      className={`image m0auto`}
    >
      <video
        src={src}
        autoPlay
        playsInline
        loop
        muted
        className={`has-ratio ${size}`}
        onError={_keepTrying}
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
    <section className="container fluid" style={{height: '100%'}}>
      <div className="columns is-vcentered is-desktop is-mobile" style={{height: '100%'}}>
        <div className="column has-text-centered">
          {(qrCode.progress < 100) ? _getProgress(qrCode) : _getPreview(qrCode)}
          {qrCode.str}
        </div>
      </div>
    </section>
  )
}

export default Preview
