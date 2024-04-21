/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let copyOfStr1 = str1.split(str2);
    while (copyOfStr1.length > 1 && copyOfStr1.length < str2.length) {
        if (copyOfStr1.includes(str2)) {
            let index = copyOfStr1.indexOf(str2);
            copyOfStr1.splice(index);
        }
    }
    return 'x';
};

console.log('>>> ABCABC', 'ABCABC', 'ABC')