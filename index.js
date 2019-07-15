function driversWithRevenueOver(array, revenue){
  return array.filter(function(person){
    return person.revenue > revenue
  })
}

function driverNamesWithRevenueOver(array, revenue) {
  let newArray = driversWithRevenueOver(array, revenue)
  return newArray.map(function(person) {
    return person.name
  })
}

function exactMatch(array, object) {
  return array.filter(function(person){
    return person[Object.keys(object)[0]] === object[Object.keys(object)[0]]
  })
}

function exactMatchToList(array, object) {
  let newArray = exactMatch(array, object)
  return newArray.map(function(person) {
    return person.name
  })
}
