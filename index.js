// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
}
//returns array of driver objects with revenue greater than given revenue

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name
    })
}
//returns array of names of drivers with revenue over given revenue

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    let matches = []
    for (const key in attribute) {
      matches = driver[key] === attribute[key]
    }
    return matches
  })
}
//returns array of driver objects that have matching attribute of given attribute

function exactMatchToList(drivers, attributes) {
  return exactMatch(drivers, attributes)
    .map(function (driver) {
      return driver.name
    })
}
//returns array of driver names with matching attribute of attribute given
