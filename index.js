function driversWithRevenueOver(driver, amt) {
    return driver.filter
        (function(ele) {
            return ele.revenue > amt
        }
    );
}

function driverNamesWithRevenueOver(drivers, amt){
    return driversWithRevenueOver(drivers, amt).map(
        function(driver){
            return driver.name
        }
    );
}

function exactMatch(drivers, obj) {
    return driver.filter (
        function(driver) {
            return driver.obj === obj
        }
    );
}

function exactMatch(drivers, obj){
    const key = Object.keys(obj)[0];
    return drivers.filter(
        function(driver){
            return driver[key] === obj[key];
        }
    );
}

function exactMatchToList(drivers, obj) {
    return exactMatch(drivers, obj).map(
        function(driver) {
            return driver.name
        }
    );
}
