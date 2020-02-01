module.exports = function(){
  let curPages =  getCurrentPages()
  return curPages[curPages.length-1]
}