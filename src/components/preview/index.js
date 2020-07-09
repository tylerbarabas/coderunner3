import React from 'react'

const Preview = props => {
  const _getPreview = src => {
    if (src.indexOf('/frames/1') !== -1) {
      return (
        <div
          style={{
            padding: '15%',
          }}
        >
          <figure className="image is-1by1"
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

  return (
    <div className="columns is-vcentered is-fullheight">
      <div className="column  has-text-centered">
        {_getPreview(props.src)}
      </div>
    </div> 
  )
}

export default Preview
