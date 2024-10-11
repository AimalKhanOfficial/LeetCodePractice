/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const wordMap = new Map();
    pattern = pattern.split('');
    s = s.split(' ')
    patternCopy = [...pattern];
    sCopy = [...s];
    pattern = pattern.filter((value, index, self) => self.indexOf(value) === index);
    s = s.filter((value, index, self) => self.indexOf(value) === index);
    for (let i = 0; i < pattern.length; i++) {
        if (!wordMap.has(pattern[i])) {
            wordMap.set(pattern[i], s[0]);
            s.splice(0, 1);
        }
    }
    let finalString = '';
    for (let i = 0; i < patternCopy.length; i++) {
        finalString = finalString + wordMap.get(patternCopy[i]) + ' ';
    }
    return finalString.trim() === sCopy.join(' ');
};

console.log('>> word', wordPattern(pattern = "deadbeef", s = "d e a d b e e f"))