module.exports = function(b){
  let raw = Component
  Component = function (option){
    if(!option.behaviors)
      option.behaviors = [b]
    else
      option.behaviors.unshift(b)
    raw(option)
  }
}
