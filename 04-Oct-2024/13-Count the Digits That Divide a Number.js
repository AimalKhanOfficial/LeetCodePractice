/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let numOfDig = 0;
    let nums = num.toString().split('');
    for (let i = 0; i < nums.length; i++) {
        if (num % parseInt(nums[i]) === 0) {
            numOfDig++;
        }
    }
    return numOfDig;
};

console.log('>> ', countDigits(1248))