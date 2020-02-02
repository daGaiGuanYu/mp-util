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
    setTimeout(cb, 1500)
  }

  wx.showToast({
    mask: true,
    title,
    duration: 1500
  })
}

module.exports = common