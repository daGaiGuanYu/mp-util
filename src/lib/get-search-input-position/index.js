let rect = null

module.exports = function(){
  if(rect)
    return { ...rect } // 防止外部修改 rect
  let menuRect = wx.getMenuButtonBoundingClientRect()
  let left = menuRect.right,
    right = menuRect.width + left,
    top = menuRect.top,
    bottom = menuRect.bottom,
    width = left - right,
    height = menuRect.height;
  rect = {
    left, right, top, bottom, width, height
  }
  return rect
}