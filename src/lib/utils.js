const utils = {}

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

export default utils
