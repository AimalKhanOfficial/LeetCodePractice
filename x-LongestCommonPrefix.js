/**
 * @param {string[]} strs
 * @return {string}
 */
//https://leetcode.com/problems/longest-common-prefix/submissions/1275463936/
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let firstWord = strs[0].split('');
    let commonStuff = [];
    let continueLoop = true;
    let wordCounter = 1;
    while (continueLoop) {
        let letters = firstWord.slice(0, wordCounter).join('');
        
        //main logic
        let letterExistsInAll = true;
        for (let i = 1; i < strs.length; i++) {
            if (!strs[i].slice(0, letters.length).includes((letters))) {
                letterExistsInAll = false;
            }
        }
        if (letterExistsInAll) {
            commonStuff.push(letters);
        }

        wordCounter++;
        if (wordCounter > firstWord.length) {
            continueLoop = false;
        }
    }
    return commonStuff.pop() || '';
};

console.log('>>> LCP', longestCommonPrefix(["flower","flow","flight"]))

console.log('>>> LCP', longestCommonPrefix(["dog","racecar","car"]))
console.log('>>> LCP', longestCommonPrefix(["c","acc","ccc"]))