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

export default utils
