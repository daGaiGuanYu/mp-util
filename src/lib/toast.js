function common(title='未知错误'){
  wx.showToast({
    title,
    icon: 'none'
  })
}

common.success = function(title='操作成功', cb){
  if(cb){
    if(cb == 'back')
      cb = wx.navigateBack
    else if(cb.constructor == String){
      let url = cb
      cb = function(){
        wx.navigateTo({ url })
      }
    }else{
      let url = cb.url
      if(cb.redirect)
        cb = function(){
          wx.redirectTo({ url })
        }
      else
        cb = function(){
          wx.navigateTo({ url })
        }
    }
    setTimeout(cb, 1500)
  }

  wx.showToast({
    mask: true,
    title,
    duration: 1500
  })
}

module.exports = common