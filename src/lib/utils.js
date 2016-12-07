const utils = {}

let saveToLocal = function(data){
  localStorage.setItem('recList',data)
}

utils.getDate = function () {
  let toDay = new Date()
  return `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDay()}`
}

utils.isEmptyObject = function (obj) {
  for (var name in obj) {
    return false;
  }
  return true;
}

/**
 * 
 * 
 * @param {any} obj 动作的对象
 * @returns 返回最近的一个item
 */
utils.getCurrentAction = function (obj) {
  if (this.isEmptyObject(obj)) {
    return []
  } else {
    let index = Object.keys(obj)
    return obj[index[index.length - 1]]
  }
}

utils.syncRecToLocal = function(data) {
  let result = JSON.stringify(data)
  localStorage.setItem('recList',result)
}
utils.syncRecToApp = function(){
  if(localStorage.getItem('recList')){
    return JSON.parse(localStorage.getItem('recList'))
  }
  return {}
}



export default utils
