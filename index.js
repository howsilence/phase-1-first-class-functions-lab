// Code your solution in this file!
const drivers = ["bill", "bob", "thorton", "angel", "ina", "joe", "lee"]
const returnFirstTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(0,2);
};
const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(-2)
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (fareMultiplier) => {
        return (value) => {
            return fareMultiplier * value
        };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (arrayOfDrivers, selection) => {
    return selection(arrayOfDrivers)
};