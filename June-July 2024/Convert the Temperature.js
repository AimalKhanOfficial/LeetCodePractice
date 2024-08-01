/**
 * @param {number} celsius
 * @return {number[]}
 */
//https://leetcode.com/problems/convert-the-temperature/submissions/1317917385/
var convertTemperature = function(celsius) {
    return [celsius + 273.15, celsius * 1.80 + 32.00]
};
