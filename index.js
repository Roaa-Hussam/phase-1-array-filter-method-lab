function findMatching(drivers, value) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === value.toLowerCase() })
}

function fuzzyMatch(drivers, value) {
    return drivers.filter(function (driver) { return driver.char[0] === value.char[0] })

}

function fuzzyMatch(drivers, value) {
    return drivers.filter(function (driver) {
        const value1 = driver.split('');
        const value2 = value.split('');
        return value1[0] === value2[0]
    })
}



function matchName(drivers, value) {
    return drivers.filter(({ name }) => name === value);


}