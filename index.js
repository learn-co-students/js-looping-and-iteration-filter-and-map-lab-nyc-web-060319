function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(driver, matcher){
    return driver.filter(function(driver){
        let match = false;

        for (const key in matcher) {
          match = driver[key] === matcher[key];
        }
    
        return match;
    });
}

function exactMatchToList(driver, matcher){
    return exactMatch(driver, matcher)
    .map(function (driver) {
        return driver.name;
      });
}