/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let allCapticals = true;
    let allSmalls = true;
    let capitalsAfterFirst = false;
    let isOnlyFirstLetterCapital = false;
    word = word.split('');
    for (let i = 0; i < word.length; i++) {
        const letterCharCode = word[i].charCodeAt(0);

        if (i === 0 && letterCharCode >= 65 && letterCharCode <= 90) {
            isOnlyFirstLetterCapital = true;
        } else if (letterCharCode >= 65 && letterCharCode <= 90) {
            allSmalls = false;
            capitalsAfterFirst = true;
        } else {
            allCapticals = false;
        }
    }
    return (
        allCapticals ||
        isOnlyFirstLetterCapital && allSmalls ||
        isOnlyFirstLetterCapital && !capitalsAfterFirst ||
        allSmalls
    );
};

console.log('>> ', detectCapitalUse(word = "USA"))
console.log('>> ', detectCapitalUse(word = "leetcode"))
console.log('>> ', detectCapitalUse(word = "FlaG"))
console.log('>> ', detectCapitalUse(word = "Flag"))