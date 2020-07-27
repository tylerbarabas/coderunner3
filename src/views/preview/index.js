import React, {
  useContext,
} from 'react'
import { QrCodeContext } from  '../../contexts/qrcode'
import { ResponsiveContext } from '../../contexts/responsive'
import Service from '../../service'
import './index.scss'

const { DOMAIN, DEFAULT } = Service
const _getFirstFrame = str => `${DOMAIN}/new?msg=${str}&anim=staticCodeOnly&format=png&xres=350&yres=350`
const _getMp4 = id => `${DOMAIN}/orders/${id}/mp4`

const _keepTrying = e => {
  const { target } = e
  const { src } = target
  setTimeout(()=>{
    target.src = src
  },500)
}
let throttle = null
const _throttleImage = str => {
  if (throttle) clearTimeout(throttle)
  throttle = setTimeout(()=>{
    const image = document.getElementById('preview-image')
    image.src = _getFirstFrame(str)
    image.style.visibility = 'visible'
  },500)
}
const _getPreview = qrCode => {
  const {
    responsive,
  } = useContext(ResponsiveContext)
  const {
    isFullHD,
  } = responsive
  let size = 'is-256by256'
  if (isFullHD) size = 'is-512by512'
  const {
    id,
    str,
    animation,
  } = qrCode
  let src = DEFAULT
  if (animation === 'staticCodeOnly' && str.length > 0) {
    _throttleImage(str)
    return (
      <figure
        className="image"
      >
        <img
          src={null}
          onError={_keepTrying}
          alt="Preview"
          className={`m0auto ${size}`}
          id="preview-image"
          style={{visibility: 'hidden'}}
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
    <section className="container fluid h100">
      <div className="columns is-vcentered is-desktop is-mobile h100">
        <div className="column has-text-centered">
          {(qrCode.progress < 100) ? _getProgress(qrCode) : _getPreview(qrCode)}
        </div>
      </div>
      <div className="message-container is-size-4">
        {qrCode.str}
      </div>
    </section>
  )
}

export default Preview
