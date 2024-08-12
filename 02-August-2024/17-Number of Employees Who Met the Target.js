/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    hours.forEach(hourItem => {
        if (hourItem >= target) count++;
    })
    return count;
};

console.log('>> ', numberOfEmployeesWhoMetTarget(hours = [0,1,2,3,4], target = 2))