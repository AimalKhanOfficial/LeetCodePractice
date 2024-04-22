/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
//https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75
var gcdOfStrings = function(str1, str2) {
    let reverseCounter = str2.length;
    let wordToTry = '';
    let fullMatchFound = false;
    for (let i = 0; i < str2.length; i++) {
        wordToTry = str2.substring(reverseCounter, 0);
        //console.log(wordToTry)
        let copyOfStr1 = str1;
        while (!fullMatchFound) {
            //console.log(copyOfStr1, wordToTry, copyOfStr1.includes(wordToTry), copyOfStr1.length);
            if (copyOfStr1.includes(wordToTry)) {
                copyOfStr1 = copyOfStr1.replace(wordToTry, '')
            }
            else if (copyOfStr1.length === wordToTry.length && !copyOfStr1.includes(wordToTry)) {
                fullMatchFound = false;
                //console.log('breaking loop on 2')
                break;
            }
            else if (copyOfStr1.length === 0){
                fullMatchFound = true;
                //console.log('zeroooooo')
                break;
            }
            else if (copyOfStr1.length < wordToTry.length || copyOfStr1.length > wordToTry.length) {
                fullMatchFound = false;
                //console.log('breaking loop on 3')
                break;
            }
        }
        if (fullMatchFound) break;
        reverseCounter--;
    }
    return fullMatchFound ? wordToTry : '';
};