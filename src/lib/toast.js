function common(title='未知错误'){
  wx.showToast({
    title,
    icon: 'none'
  })
}

common.success = function(title='操作成功', cb){
  if(cb){
    if(cb == 'back')
      wx.navigateBack()
    else if(cb.constructor == Function)
      setTimeout(cb, 1500)
  }

  wx.showToast({
    title,
    duration: 1500
  })
}

module.exports = common