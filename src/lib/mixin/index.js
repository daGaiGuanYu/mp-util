const RawPage = Page
const globalOption = []

Page = function(...optionList){
  optionList = [...globalOption, ...optionList]
  option = mix(optionList)
  return RawPage(option)
}

function global(option){
  globalOption.push(option)
}

function mix(optionList){
  let base = {}

  let next
  while(next = optionList.shift())
    base = Object.assign(base, next)
  
  if(base.data)
    base.data = base.data()

  return base
}
