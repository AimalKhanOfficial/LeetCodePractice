/**
 * @param {string} s
 * @return {boolean}
 */
//This solution worked - https://leetcode.com/problems/valid-parentheses/submissions/1276536804/
var isValid = function (s) {
    //zero or uneven cases
    if (s.length === 0 || s.length % 2 !==  0) return false;

    let bracketMaps = [];
    let bracketEndingsMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let mapToSkip = [')', ']', '}']
    for (let i = 0; i < s.length; i++) {
        if (mapToSkip.includes(s[i])) continue;
        bracketMaps.push({
            bracketToLookFor: s[i],
            index: i
        })
    }
    
    //no starting brackets found
    if (bracketMaps.length === 0) return false;

    let continueLoop = true;
    let counter = bracketMaps.length - 1;
    let sCopy = s.split('');
    while (continueLoop) {
        
        let {bracketToLookFor, index} = bracketMaps[counter];
        if (sCopy[index + 1] === bracketEndingsMap[bracketToLookFor]) {
            bracketMaps.splice(counter, 1);
            sCopy.splice(index, 2);
            counter--;
        }
        else {
            return false;
        }

        if (counter < 0) continueLoop = false;
    }
    //console.log('>>> sCopy', sCopy)
    return sCopy.length === 0 ? true : false;
};

console.log('>> isValid false', isValid('([)]'))
console.log('>> isValid true', isValid('{[]}'))
console.log('>> isValid true', isValid('()[]{}'))
console.log('>> isValid false', isValid('(]'))
console.log('>> isValid true', isValid('()'))
console.log('>> isValid false', isValid(')))'))
console.log('>> isValid false', isValid(')(){}'))
console.log('>> isValid false', isValid('()))'))

//this implementation does not look at the order but rather looks at the later in the string for endings as well
// var isValid = function (s) {
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }
//     let mapToSkip = [')', ']', '}']
//     let bracketEndingToLookFor = '';
//     let endingFound = false;
//     let loopedItems = false;
//     for (let i = 0; i < s.length; i++) {
//         if (mapToSkip.includes(s[i])) continue;
//         bracketEndingToLookFor = map[s[i]];
//         endingFound = false;
//         loopedItems = true;
//         for (let j = i + 1; j < s.length; j++) {
//             if (s[j] === bracketEndingToLookFor) {
//                 endingFound = true;
//                 break;
//             }
//         }
//         //console.log('>> bracketEndingToLookFor', s[i], bracketEndingToLookFor, endingFound)
//         if (!endingFound) {
//             return false
//         }
//     }
//     return loopedItems ? true : false;
// };


// var isValid = function (s) {
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }
//     let mapToSkip = [')', ']', '}']
//     let loopedItems = false;
//     for (i = 0; i < s.length; i++) {
//         if (mapToSkip.includes(s[i])) continue;
//         let endingToLookFor =  map[s[i]];
//         loopedItems = true;
//         //console.log('>> ', s[i], endingToLookFor)
//         if (s[i + 1] !== endingToLookFor) {
//             return false;
//         }
//     }
//     return loopedItems ? true : false;
// };

// var isValid = function (s) {
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }
//     let mapToSkip = [')', ']', '}']
//     let bracketEndingToLookFor = '';
//     let endingFound = false;
//     let loopedItems = false;
//     for (let i = 0; i < s.length; i++) {
//         if (mapToSkip.includes(s[i])) continue;
//         bracketEndingToLookFor = map[s[i]];
//         endingFound = false;
//         loopedItems = true;
//         for (let j = i + 1; j < s.length; j++) {
//             if (s[j] === bracketEndingToLookFor) {
//                 endingFound = true;
//                 break;
//             }
//         }
//         //console.log('>> bracketEndingToLookFor', s[i], bracketEndingToLookFor, endingFound)
//         if (!endingFound) {
//             return false
//         }
//     }
//     return loopedItems ? true : false;
// };