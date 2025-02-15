/**
 * @param {number} x
 * @return {boolean}
 */
//Submitted - https://leetcode.com/problems/palindrome-number/submissions/1274664398/
var isPalindrome = function(x) {
    return parseFloat(x.toString().split('').reverse().join('')) === x;
};

console.log('>>> isPalindrome 121', isPalindrome(121))
console.log('>>> isPalindrome -121', isPalindrome(-121))
console.log('>>> isPalindrome 10', isPalindrome(10))