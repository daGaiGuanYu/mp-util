let rect = null

module.exports = function(){
  if(rect)
    return { ...rect } // 防止外部修改 rect
  let menuRect = wx.getMenuButtonBoundingClientRect()
  let width = menuRect.left,
    top = menuRect.top,
    bottom = menuRect.bottom,
    height = menuRect.height;
  rect = {
    top, bottom, width, height
  }
  return rect
}