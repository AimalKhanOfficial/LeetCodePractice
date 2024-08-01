/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//exceeds time limit - https://leetcode.com/problems/daily-temperatures/submissions/1324642319/?envType=study-plan-v2&envId=leetcode-75
var dailyTemperatures = function(temperatures) {
    if (!temperatures) return [];
    let tempDays = [];
    for (let i = 0; i < temperatures.length; i++) {
        let counter = 0;
        for (let j = i + 1; j < temperatures.length; j++) {

            if (temperatures[j] > temperatures[i]) {
                counter = j - i;
                break;
            }

        }
        tempDays.push(counter);
    }
    return tempDays;
};

console.log('>>> [1,1,4,2,1,1,0,0]', dailyTemperatures([73,74,75,71,69,72,76,73]))