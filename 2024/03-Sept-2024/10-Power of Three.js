/**
 * @param {number} n
 * @return {boolean}
 */
// Solved - https://leetcode.com/problems/power-of-three/solutions/5811846/js-o-n-runtime-160-ms-beats-51/
var isPowerOfThree = function(n) {
    if (n === 1) return true;
    let product = 0;
    let x = 1;
    let finalResponse = false;
    while (product <= n) {
        product = Math.pow(3, x);
        if (product === n) {
            finalResponse = true;
            break;
        }
        x++;
    }
    return finalResponse;
};

console.log(">>", isPowerOfThree(1))