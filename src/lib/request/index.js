module.exports = class Request{
  constructor(baseUrl, header, around, aroundErr){
    this.baseUrl = baseUrl
    this.header = header
    this.around = around
    this.aroundErr = aroundErr
  }

  request(url, data, method, header){
    if(url.constructor != String){
      let query = url.query
      url = url.url
      if(query){
        url += '?'
        for(let key in query)
          url += key + query[key]
      }
    }
    return new Promise( (resolve, reject) => {
      wx.request({
        url: this.baseUrl + url,
        data,
        header: Object.assign({}, this.header, header), // 这个顺序保证 header 覆盖 this.header 而不改变
        method,
        success: res => {
          if(this.around)
            this.around(res, resolve)
          else
            resolve(res)
        },
        fail: err => {
          if(this.aroundErr)
            this.aroundErr(err, reject)
          else
            reject(err)
        }
      })
    })
  }
  
  get(url, header){
    return this.request(url, null, 'GET', header)
  }

  post(url, data, header){
    return this.request(url, data, 'POST', header)
  }
  put(url, data, header){
    return this.request(url, data, 'PUT', header)
  }
  delete(url, data, header){
    return this.request(url, data, 'DELETE', header)
  }
}
