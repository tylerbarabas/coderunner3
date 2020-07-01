//Vars to export
const DOMAIN = 'service.acme.codes'
const constants = {
  DOMAIN,
}

//Methods to export
const methods = {
  createStaticCode: async args => {
    const {
      msg,
    } = args
    const uri = `https://api.acme.codes/new?msg=${msg}&frameNumber=1&anim=staticCodeOnly&xres=300&yres=300&gif=0&fbx=0`
    const res = await fetch(uri)
    return res
  },
}

//Export combined object
export default { ...constants, ...methods }
