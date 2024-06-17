//finding the nth fib number - brute force

//nth as in - nth in the sequence and not the number itself
// let fibNumberFinder = (nth) => {
//     let start = 0;
//     let sum = 0;
//     for (let i = 0; i < nth; i++) {
//         if (i == 0) {
//             sequence = [start, 1];
//         }
//         else {
//             sum = sequence[i - 1] + sequence[i];
//             sequence.push(sum);
//         }
//     }
//     console.log('>>> fibSeq', sequence)
// }

let getFibNumber = (nth, memo={}) => {
    if (memo[nth]) return memo[nth];
    if (nth <= 1) {
        return nth;
    }
    else {
        console.log(`>> recursive approach call for getFibNumber(${nth - 1}) + getFibNumber(${nth - 2})`)
        memo[nth] = getFibNumber(nth - 1) + getFibNumber(nth - 2);
        return memo[nth];
    }
}

// Recursive approach
let fibNumberFinder = (nth) => {
    let sequence = [];
    sequence.push(getFibNumber(nth));
    console.log('>> seq:', sequence)
}

fibNumberFinder(4)

//maybe via dynamic programming