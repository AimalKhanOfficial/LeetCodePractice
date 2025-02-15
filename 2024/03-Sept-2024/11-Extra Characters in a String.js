//Partially works - like 1k test cases.

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    for (let i = 0; i < dictionary.length; i++) {
        s = s.replaceAll(dictionary[i], '');
    }
    console.log('>>', s)
    return s.length;
};

console.log('>> ', minExtraChar(s = "dwmodizxvvbosxxw", dictionary = ["ox","lb","diz","gu","v","ksv","o","nuq","r","txhe","e","wmo","cehy","tskz","ds","kzbu"]))