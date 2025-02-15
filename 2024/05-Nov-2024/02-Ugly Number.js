function calculate(num) {
    var factorArr = [];
    for (var i = 2; i <= num; i++) {
        while (num % i === 0) {
            factorArr.push(i);
            num /= i;
        }
    }
    return factorArr;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n < 0) return false;
    if (n === 1) return true;
    let allFactors = calculate(n);
    for (let i = 0; i < allFactors.length; i++) {
        if (![2, 3, 5].includes(allFactors[i])) {
            return false;
        }
    }
    return true;
};

console.log('>> ', isUgly(8));