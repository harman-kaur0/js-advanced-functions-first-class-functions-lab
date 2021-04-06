// Code your solution in this file!
const returnFirstTwoDrivers = (a) => a.slice(0, 2);
const returnLastTwoDrivers = (a) => a.slice(a.length - 2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer) {
  return function fareMultiplier(fare) {
    return fare * integer;
  };
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);
const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}
