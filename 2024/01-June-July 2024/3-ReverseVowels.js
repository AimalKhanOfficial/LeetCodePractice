/**
 * @param {string} s
 * @return {string}
 */
//https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/1240956619/?envType=study-plan-v2&envId=leetcode-75
var reverseVowels = function(s) {
    let vowelsIndexList = [];
    let vowelsFoundList = [];
    let vowelsList = ['a', 'e', 'i', 'o', 'u'];

    // Find all vowels in the string
    for (let i = 0; i < s.length; i++) {
        if (vowelsList.includes(s[i].toLowerCase())) {
            vowelsIndexList.push(i);
            vowelsFoundList.push(s[i]);
        }
    }

    // Reverse the vowels
    vowelsFoundList = vowelsFoundList.reverse();

    //Replacing the vowels in the string
    for (let i = 0; i < vowelsIndexList.length; i++) {
        s = s.substring(0, vowelsIndexList[i]) + vowelsFoundList[i] + s.substring(vowelsIndexList[i] + 1);
    }
    return s;
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("aA")); //Output "aA" Expected "Aa"
