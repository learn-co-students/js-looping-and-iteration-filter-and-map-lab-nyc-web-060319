// Code your solution here:
function getDriverNames(drivers){
    const names = drivers.map(
        function(driver){
            return driver.name;
        });
    return names;
}

function driversWithRevenueOver(drivers, revenue){
    const list = drivers.filter(
        function(driver){
            return driver.revenue > revenue;
        }
    );
    return list;
}

function driverNamesWithRevenueOver(drivers, revenue){
    const driverObj = driversWithRevenueOver(drivers, revenue);
    const driverNames = getDriverNames(driverObj);
    return driverNames; 
}

function exactMatch(drivers, attribute){
    const key = Object.keys(attribute)[0];
    const list = drivers.filter(
        function(driver){
            return driver[key] === attribute[key];
        }
    );
    return list;
}

function exactMatchToList(drivers, attribute){
    const driverObj = exactMatch(drivers, attribute);
    const driverNames = getDriverNames(driverObj);
    return driverNames;
}
