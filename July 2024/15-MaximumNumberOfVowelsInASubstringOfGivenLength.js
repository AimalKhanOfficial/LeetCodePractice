/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
//submitted - passes about 102 test cases out of 106
//https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/1252279289/?envType=study-plan-v2&envId=leetcode-75
var maxVowels = function(s, k) {
    let subArrays = [];
    let subArray = '';
    let vowelsMap = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < s.length; i++) {
        subArray = s.slice(i, i + k);
        if (subArray.length === k) {
            subArrays.push(subArray.split('').filter(a => vowelsMap.includes(a)).length);
        }
    }
    return Math.max(...subArrays);
};

console.log('>>> maxVowels', maxVowels("abciiidef", 3))
console.log('>>> maxVowels', maxVowels("aeiou", 2))