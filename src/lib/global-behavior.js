module.exports = function(b){
  let raw = Component
  Component = function (option){
    option.behaviors.unshift(b)
    raw(option)
  }
}
