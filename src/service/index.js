const DOMAIN = 'https://api.acme.codes'
const DEFAULT = 'https://acme.ink/welcome/default.mp4'
const _getFullPath = path => `${DOMAIN}${path}`

//URIS
const uri_createStaticCode = _getFullPath('/new?msg=:msg&frameNumber=1&anim=staticCodeOnly&xres=300&yres=300&gif=0&fbx=0')
const uri_progress = _getFullPath('/orders/:orderid/progress')

//Vars to export
const constants = {
  DEFAULT,
  DOMAIN,
}

//Methods to export
const methods = {
  createStaticCode: async ({ msg }) => {
    if (typeof msg !== 'string' || msg.length < 1) throw 'Cannot create static code. No msg to encode.'
    const uri = uri_createStaticCode.replace(/:msg/, msg)
    const res = await fetch(uri)
    return res
  },
  checkProgress: async orderId => {
    const uri = uri_progress.replace(/:orderid/, orderId)
    const res = await fetch(uri)
    return res
  },
}

//Export combined object
export default { ...constants, ...methods }
