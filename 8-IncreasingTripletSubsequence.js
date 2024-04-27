/**
 * @param {number[]} nums
 * @return {boolean}
 */

//https://leetcode.com/problems/increasing-triplet-subsequence/submissions/1243454353/?envType=study-plan-v2&envId=leetcode-75
//Passed 63 out of 84 test cases
var increasingTriplet = function(nums) {
    let max = 0;
    let maxIndex = 0;
    let conditionFound = false;

    //finding max with index
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }

    //finding min with index
    let min = max;
    let minIndex = maxIndex;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
            minIndex = i;
        }
    }
    console.log('>>> min, max,', min, 'at index:', minIndex, '. and max', max, 'at index:', maxIndex);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > min && nums[i] < max && i > minIndex && i < maxIndex) {
            conditionFound = true;
            break;
        }
    }
    return conditionFound;
};

console.log('>>> increasingTriplet', increasingTriplet([20,100,10,12,5,13]))
//console.log('>>> increasingTriplet', increasingTriplet([1,2,3,4,5]))
//console.log('>>> increasingTriplet[5,4,3,2,1]', increasingTriplet([5,4,3,2,1]))
//console.log('>>> increasingTriplet[2,1,5,0,4,6]', increasingTriplet([2,1,5,0,4,6]))

//First attempt
//let conditionFound = false;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i === j) continue;
    //         for (let k = 0; k < nums.length; k++) {
    //             if (j === k) continue;
    //             if (i < j && j < k && nums[i] < nums[j] && nums[j] < nums[k]) {
    //                 conditionFound = true;
    //                 break;
    //             }
    //         }
    //         if (conditionFound) break;
    //     }
    //     if (conditionFound) break;
    // }
    // return conditionFound;
