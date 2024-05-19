/**
 * @param {number[]} gain
 * @return {number}
 */
//solved - https://leetcode.com/problems/find-the-highest-altitude/submissions/1262616171/?envType=study-plan-v2&envId=leetcode-75
var largestAltitude = function(gain) {
    let altitudes = [0];
    let start = 0;
    let currAlt = 0;
    for (let i = 0; i < gain.length; i++) {
        currAlt += gain[i];
        altitudes.push(currAlt); 
    }
    console.log('>> all', altitudes)
    return Math.max(...altitudes)
};

//console.log('>>> [-5,1,5,0,-7]', largestAltitude([-5,1,5,0,-7]))
console.log('>>> [-4,-3,-2,-1,4,3,2]', largestAltitude([-4,-3,-2,-1,4,3,2]))