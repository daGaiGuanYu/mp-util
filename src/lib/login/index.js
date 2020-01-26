const axios = require('axios')

module.exports = class WxLogin {
  constructor(appid, secret){
    this.appid = appid
    this.secret = secret
  }
  getOpenidByCode(code){
    return axios(`https://api.weixin.qq.com/sns/jscode2session?appid=${this.appid}&secret=${this.secret}&js_code=${code}&grant_type=authorization_code`)
  }
}
