/**
 * @param {string[]} words
 * @return {number}
 */
//https://leetcode.com/problems/find-maximum-number-of-string-pairs/submissions/1319200190/
var maximumNumberOfStringPairs = function(words) {
    let result = 0;
    let alreadyMatched = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i === j) continue;
            let word = words[j].split('').reverse().join('');
            if (!alreadyMatched.includes(word) && word === words[i]) {
                alreadyMatched.push(words[j]);
                alreadyMatched.push(words[i]);
                result++;
            }
        }
    }
    return result;
};
console.log('>> ["cd","ac","dc","ca","zz"]', maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]))