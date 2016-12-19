const utils = {}
const DEFINE_ACTION_LIST = { "胸部": [{ "name": "Deena Hopper", "desc": "Carson" }, { "name": "Bass Livingston", "desc": "Jami" }, { "name": "Marjorie Jefferson", "desc": "Holder" }, { "name": "Klein Fitzpatrick", "desc": "Munoz" }], "背部": [{ "name": "Willa Bruce", "desc": "Lois" }, { "name": "Coleman Townsend", "desc": "Diaz" }, { "name": "Adrian Andrews", "desc": "Pickett" }, { "name": "Corinne White", "desc": "Avery" }], "腿部": [{ "name": "Rodriquez Ferguson", "desc": "Frederick" }, { "name": "Aileen Holland", "desc": "Leola" }, { "name": "Margie Hamilton", "desc": "Patsy" }, { "name": "Mara Warren", "desc": "Effie" }], "肩部": [{ "name": "Rowland Simmons", "desc": "Alexander" }, { "name": "Tia Potts", "desc": "Rhea" }, { "name": "Cooke Woodward", "desc": "Alyson" }, { "name": "Faye Browning", "desc": "Melva" }], "手臂": [{ "name": "Bonnie Carney", "desc": "Lynn" }, { "name": "Kimberley Carrillo", "desc": "Leann" }, { "name": "Campbell Jimenez", "desc": "Charlene" }, { "name": "Acevedo Adams", "desc": "Beatrice" }], "腹部": [{ "name": "Genevieve Velez", "desc": "Lilly" }, { "name": "Miriam Roach", "desc": "Kathleen" }, { "name": "Benson Parsons", "desc": "Flossie" }, { "name": "Mccullough Cortez", "desc": "Koch" }], "有氧": [{ "name": "Valenzuela Hendrix", "desc": "Alberta" }, { "name": "Michael Tate", "desc": "Bryan" }, { "name": "Therese Schneider", "desc": "Santana" }, { "name": "Lesa Pratt", "desc": "Wheeler" }], "拉伸": [{ "name": "Ramona Morton", "desc": "Lourdes" }, { "name": "Saunders Warner", "desc": "Bush" }, { "name": "Augusta Maynard", "desc": "Webb" }, { "name": "Britney Mayer", "desc": "Hayes" }] }

let saveToLocal = function(data){
  localStorage.setItem('recList',data)
}

utils.getDate = function () {
  let toDay = new Date()
  return `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate()}`
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

utils.syncRecToLocal = function(key, data) {
  let result = JSON.stringify(data)
  switch (key) {
    case 'rec':
      localStorage.setItem('recList',result)
      break;
    case 'act':
      localStorage.setItem('actionList', result)
      break;
    case 'plan':
      localStorage.setItem('planList', result)
      break;
    default:
      break;
  }
  
}
utils.syncRecToApp = function(key){
  switch (key) {
    case 'rec':
      if(localStorage.getItem('recList')){
        return JSON.parse(localStorage.getItem('recList'))
      }
      break;
    case 'act':
      if(localStorage.getItem('actionList')){
        return JSON.parse(localStorage.getItem('actionList'))
      }else{
        return DEFINE_ACTION_LIST
      }
      break
    case 'plan':
      if(localStorage.getItem('planList')){
        return JSON.parse(localStorage.getItem('planList'))
      }else{
        return {}
      }
    default:
      break;
  }
  return {}
}



export default utils
