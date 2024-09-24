/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let final = [];
    //For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).
    for (let i = 0; i < s.length; i++) {
        let indexToReplaceWith = (i + k) >= s.length ? (i + k) - s.length : i + k;
        final.push(s[indexToReplaceWith]);
    }
    return final.join('');
};

console.log('>>', getEncryptedString(s = "byd", k = 4))