/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Works with 12 out of 24 test cases
//https://leetcode.com/problems/product-of-array-except-self/submissions/1242147017/?envType=study-plan-v2&envId=leetcode-75
var productExceptSelf = function(nums) {
    let finalArray = [];
    let arrayCopy = [];
    for (let i = 0; i < nums.length; i++) {
        arrayCopy = [...nums];
        arrayCopy.splice(i, 1);
        //console.log('>> array', arrayCopy )
        finalArray.push(arrayCopy.length > 1 ? [...arrayCopy].reduce((a, b)=> Math.abs(a)*Math.abs(b), 1) : arrayCopy[0]);
        //console.log(">>", finalArray)
    }
    return finalArray;
};

console.log('>>> [1,2,3,4]', productExceptSelf([1,2,3,4]))
console.log('>>> [-1,1,0,-3,3]', productExceptSelf([-1,1,0,-3,3]))
console.log('>>> [1,-1]', productExceptSelf([1,-1]))