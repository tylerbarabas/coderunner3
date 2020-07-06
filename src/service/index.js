//URIS
const uri_createStaticCode = '/new?msg=:msg&frameNumber=1&anim=staticCodeOnly&xres=300&yres=300&gif=0&fbx=0'

//Vars to export
const DOMAIN = 'https://api.acme.codes'
const constants = {
  DOMAIN,
}

//Methods to export
const methods = {
  createStaticCode: async msg => {
    if (typeof msg !== 'string' || msg.length < 1) throw 'Cannot create static code. No msg to encode.'
    const uri = uri_createStaticCode.replace(/:msg/, msg)
    const res = await fetch(uri)
    return res
  },
}

//Export combined object
export default { ...constants, ...methods }
