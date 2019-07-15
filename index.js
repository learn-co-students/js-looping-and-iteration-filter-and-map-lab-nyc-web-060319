// Code your solution here:
function driversWithRevenueOver(drivers, amt) {
    return drivers.filter(
        function(driver){
            return driver.revenue > amt
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
    const objKey = Object.keys(obj)[0];
    const objProp = obj[objKey];
    return drivers.filter(
        function(driver){
            return driver[objKey] === objProp     
        }
    );
}

function exactMatchToList(drivers, obj){
    return exactMatch(drivers, obj).map(
        function(driver){
            return driver.name
        }
    );
}