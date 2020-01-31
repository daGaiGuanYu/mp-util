const global = []
module.exports = function(b){
  global.push(b)
}

const raw = Component
Component = function (option){
  option.behaviors = global.concat(option.behaviors||[])
  return raw(option)
}
