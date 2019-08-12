// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
 return drivers.filter(function(driver){
        return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers,revenue){
  return driversWithRevenueOver(drivers,revenue).map(function(driver){
    return driver.name
  });
}

// objectToMatch = {revenue: 3000}
function exactMatch(drivers, objectToMatch){
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in objectToMatch) {
      matches = driver[key] === objectToMatch[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, objectToMatch){
  return exactMatch(drivers, objectToMatch)
  .map(function(driver){
    return driver.name
  })
}
