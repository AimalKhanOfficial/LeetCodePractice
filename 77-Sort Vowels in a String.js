/**
 * @param {string} s
 * @return {string}
 */
//Works but time limit exceeded - https://leetcode.com/problems/sort-vowels-in-a-string/submissions/1329647689/
var sortVowels = function (s) {
    let vowelsMap = {};
    let indexMap = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' ||
            s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U'
        ) {
            vowelsMap = {
                ...vowelsMap, [i]: {
                    'value': s[i],
                    'ASCIIValue': s[i].charCodeAt(0),
                    'index': i
                }
            };
            indexMap.push(i)
        }
    }
    vowelsMap = Object.entries(vowelsMap).sort((a, b) => a[1].ASCIIValue - b[1].ASCIIValue);
    let counter = 0;
    s = s.split('');
    for (let i of vowelsMap) {
        s[indexMap[counter]] = i[1].value;
        counter++;
    }
    return s.join('');
};

console.log('>>>', sortVowels('lEetcOde'))