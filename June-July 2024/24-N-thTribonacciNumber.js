let calcFibNumber = (nth, memo = {}) => {
    if(nth<=1) return nth;
    if(nth==2) return 1
    if (memo[nth]) return memo[nth];
    else {
        memo[nth] = calcFibNumber(nth-1,memo)+calcFibNumber(nth-2,memo)+calcFibNumber(nth-3,memo)
        return memo[nth];
    }
}

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    return calcFibNumber(n);
};

//T0 = 0, T1 = 1, T2 = 1
//T3 = T0 + T1 + T2
//T3 = 0 + 1 + 1 = 2
//T4 = 0 + 1 + 1 + 2 = 4

console.log(tribonacci(25))