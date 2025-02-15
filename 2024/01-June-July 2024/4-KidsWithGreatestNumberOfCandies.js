/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/1241038521/?envType=study-plan-v2&envId=leetcode-75
var kidsWithCandies = function(candies, extraCandies) {
    let greatest = Math.max(...candies);
    console.log('>>>> greatest', greatest);
    let finalArray = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatest) {
            finalArray.push(true)
        }
        else {
            finalArray.push(false)
        }
    }
    return finalArray;
};

console.log('>>> kid candies', kidsWithCandies([2,3,5,1,3], 3));
console.log('>>> kid candies', kidsWithCandies([4,2,1,1,2], 1)); 
console.log('>>> kid candies', kidsWithCandies([12,1,12], 10));
