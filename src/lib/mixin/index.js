const RawPage = Page
const globalOption = []

Page = function(...optionList){
  let option = Object.assign({}, ...globalOption, ...optionList)

  if(option.data){
    if(option.data.constructor == Function)
      option.data = option.data()
    else
      throw Error('data 应该是个函数！')
  }
  return RawPage(option)
}

function global(option){
  globalOption.push(option)
}

module.exports = {
  global
}