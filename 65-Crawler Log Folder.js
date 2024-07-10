//works - https://leetcode.com/problems/crawler-log-folder/submissions/1316870582/?envType=daily-question&envId=2024-07-10
let minOperations = (arr) => {
    if (!arr) return 0;
    let stack = [];
    const regex = /[a-zA-Z0-9]?\d+\//;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === './') continue;
        else if (arr[i] === '../') {
            stack.pop();
        }
        else if (regex.test(arr[i])) {
            stack.push('heya');
        }
    }
    return stack.length;
}

console.log('>> 1', minOperations(["1/"]))
console.log('>> 2', minOperations(["d1/","d2/","../","d21/","./"]))
console.log('>> 3', minOperations(["d1/","d2/","./","d3/","../","d31/"]))
console.log('>> 0', minOperations(["d1/","../","../","../"]))

//Previous incomplete implementation
// let minOperations = (arr) => {
//     if (!arr) return 0;
//     let stepsAwayFromMainFolder = 0;
//     let stepsAwayFromParentFolder = 0;
//     const regex = /[a-zA-Z]\d+\//;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === './') continue;
//         else if (arr[i] === '../') {
//             if (stepsAwayFromParentFolder === 0) {
//                 stepsAwayFromMainFolder = 0;
//             } else {
//                 stepsAwayFromParentFolder = 0;
//                 stepsAwayFromMainFolder = stepsAwayFromParentFolder + 1;
//             }
//         }
//         else if (regex.test(arr[i])) {
//             stepsAwayFromParentFolder++;
//             stepsAwayFromMainFolder = stepsAwayFromParentFolder + 1;
//         }
//     }
//     return stepsAwayFromMainFolder;
// }
