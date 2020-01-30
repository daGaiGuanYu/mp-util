module.exports = class Request{
  // beforeSent 返回值如果为真，则取消发送请求
  // handleResult 处理状态码为 2xx 的响应
  // 其余响应交给 handleError 处理
  constructor({ baseUrl, beforeSent, handleError, handleResult, header }){
    this.baseUrl = baseUrl
    this.header = header
    this.beforeSent = beforeSent
    this.hanldeError = handleError
    this.handleResult = handleResult
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
      if(this.beforeSent)
        this.beforeSent({ url, data, method, header })
      wx.request({
        url: this.baseUrl + url,
        data,
        header: Object.assign({}, this.header, header), // 这个顺序保证 header 覆盖 this.header 而不改变
        method,
        success: res => {
          if(this.handleResult)
            this.handleResult(res, resolve, reject) // 目前拟采用不调用 resolve 或者 reject 来中断 Promise
          else
            resolve(res)
        },
        fail: err => {
          if(this.handleError)
            this.handleError(err, reject)
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
