// 向 Moment 低头

function getTxt(date=new Date(), [dateSplit='-', split=' ', timeSplit=':']=[], withSecond){
  if(date.constructor != Date)
    throw Error('date 必须是个 Date 对象，任何包裹对象都不好使！')
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  return year+dateSplit+month+dateSplit+day+split+hour+timeSplit+minute+(withSecond?(timeSplit+second):'')
}

function getFromTxt(txt){
  let [date, time] = txt.split(' ')
  let [year, month, day] = date.split('-')
  month = parseInt(month)
  month--
  let [hour, min] = time.split(':')
  return new Date(year, month, day, hour, min)
}

module.exports = {
  getTxt, getFromTxt
}