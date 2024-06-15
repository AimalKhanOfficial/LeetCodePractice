//finding the nth fib number - brute force

//nth as in - nth in the sequence and not the number itself
let fibNumberFinder = (nth) => {
    let start = 0;
    let sum = 0;
    for (let i = 0; i < nth; i++) {
        if (i == 0) {
            sequence = [start, 1];
        }
        else {
            sum = sequence[i - 1] + sequence[i];
            sequence.push(sum);
        }
    }
    console.log('>>> fibSeq', sequence)
}

fibNumberFinder(4)

//maybe via dynamic programming