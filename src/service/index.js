const localService = 'localhost:8080'
const stageService = 'service-dev.mymyapp.com'
const prodService = 'service.mymyapp.com'
//Vars to export
const DOMAIN = {
  service: 'service.acme.codes',
}
const LOGO = 'https://img1.wsimg.com/isteam/ip/370b4cbe-a544-4cba-954b-e87e54bc4709/logo/2fabdccd-9195-4f79-9d50-728742dee84f.png/:/rs=h:270/qt=q:95'

const constants = {
  DOMAIN,
  LOGO,
}

//Methods to export
const methods = {
  createStaticCode: async msg => {
    const uri = `https://api.acme.codes/new?msg=${msg}&frameNumber=1&anim=staticCodeOnly&xres=300&yres=300&gif=0&fbx=0`
    const res = await fetch(uri)
    return res
  },
}

//Export combined object
export default { ...constants, ...methods }
