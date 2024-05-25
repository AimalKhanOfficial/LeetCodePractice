/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
//Passes about 43 test cases, will be back to complete this 
var closeStrings = function(word1, word2) {
    //if they have unequal length, return false i.e. "a" vs "aa"
    if (word1.length != word2.length) return false;

    let word1Copy = word1.split('');
    let word2Copy = word2.split('');
    console.log('word1Copy', word1Copy)
    for (let i = 0; i < word2Copy.length; i++) {
        if (word1Copy.includes(word2Copy[i])) {
            word1Copy.splice(word1Copy.indexOf(word2Copy[i]), 1)
        }
    }
    if (word1Copy.length === 0) return true;
    return false;
};

console.log('>>> cabbba, abbccc', closeStrings('cabbba', 'abbccc'))