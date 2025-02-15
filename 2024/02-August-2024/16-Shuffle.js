/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newArr1 = [];
    let newArr2 = [];
    let thirdArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (i < n) {
            newArr1.push(nums[i]);
        } else {
            newArr2.push(nums[i]);
        }
    }
    let shouldSwitch = true;
    for (let i = 0; i < nums.length; i++) {
        if (shouldSwitch) {
            thirdArr.push(newArr1.shift());
            shouldSwitch = false;
        } else {
            thirdArr.push(newArr2.shift());
            shouldSwitch = true;
        }
    }
    return thirdArr;
};

console.log('>>', shuffle(nums = [2,5,1,3,4,7], n = 3))
console.log('>>', shuffle(nums = [1,2,3,4,4,3,2,1], n = 4))