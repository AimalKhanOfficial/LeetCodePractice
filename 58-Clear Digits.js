/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(`[0-9]`)) {
            s.splice(i, 1);
            i--;
            for (let j = i; j >= 0; j--) {
                if (!s[j].match(`[0-9]`)) {
                    s.splice(j, 1);
                    i--;
                    break;
                }
            }
        }
    }
    return s.join('');
};

console.log('>> cb34', clearDigits('cb34'))