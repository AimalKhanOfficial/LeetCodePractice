/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let start = 1;
    let end = n;
    let sum = 0;
    let nSeries = [];
    let continueLoop = true;
    nSeries.push(n);
    while (continueLoop) {
        sum = nSeries.reduce((a, b) => a + b, 0);
        let repeatingSum = 0;
        for (let i = start; i <= end; i++) {
            repeatingSum += i;
        }
        if (repeatingSum === sum) {
            return n;
        } 
        n--;
        nSeries.push(n);
        end = n;
        if (n === 0) {
            continueLoop = false;
        }
    }
    return -1;
};

console.log('>> ', pivotInteger(4))