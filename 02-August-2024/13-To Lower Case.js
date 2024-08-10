/**
 * @param {string} s
 * @return {string}
 */
//Sovled - https://leetcode.com/problems/to-lower-case/submissions/1350357286/
const charCodes = {
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z'
};

var toLowerCase = function(s) {
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        let char = charCodes[s[i].charCodeAt(0)];
        if (char) {
            s[i] = char;
        }
    }
    return s.join('');
};

console.log('>> ', toLowerCase('LOVELY'))