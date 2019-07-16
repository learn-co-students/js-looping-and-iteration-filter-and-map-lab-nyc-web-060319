// Code your solution here:
function  driversWithRevenueOver(drivers, num){
    return drivers.filter(function (driver) { return driver.revenue > num ; });
}

function driverNamesWithRevenueOver(drivers,num){
   let reqArray =  driversWithRevenueOver(drivers, num);
    return  reqArray.map(function (driver) { return driver.name; });

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
    const list = exactMatch(drivers, attribute);
    return list.map(function(driver){
        return driver.name;
    });
}