//https://leetcode.com/problems/backspace-string-compare/submissions/1420945723/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const trimAndRemoveBackSpace = (s) => {
    s = s.split('');
    while (s.includes('#')) {
        let indexOfPound = s.indexOf('#');
        //console.log('>> s before', s, indexOfPound);
        s.splice(indexOfPound, 1);
        if (indexOfPound - 1 >= 0) {
            indexOfPound--;
            s.splice(indexOfPound, 1);
        }
        //console.log('>> s after', s, indexOfPound);
    }
    return s;
}

var backspaceCompare = function(s, t) {
    s = trimAndRemoveBackSpace(s);
    t = trimAndRemoveBackSpace(t);
    console.log('>> s, t', s, t);
    return s.join('') === t.join('');
};

console.log('>> backspaceCompare', backspaceCompare(s = "ab#c", t = "ad#c"))
console.log('>> backspaceCompare', backspaceCompare(s = "ab##", t = "c#d#"))
console.log('>> backspaceCompare', backspaceCompare(s = "a#c", t = "b"))
console.log('>> backspaceCompare', backspaceCompare(s = "y#fo##f", t = "y#f#o##f"))