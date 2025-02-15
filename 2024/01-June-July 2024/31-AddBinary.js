/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a === 0 && b === 0) return 0;
    let aInDecimal = 0;
    let bInDecimal = 0;
    let sum = 0;
    let counter = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        aInDecimal += (a[i] * Math.pow(2, counter));
        counter++;
    }
    counter = 0;
    for (let i = b.length - 1; i >= 0; i--) {
        bInDecimal += (b[i] * Math.pow(2, counter));
        counter++;
    }
    sum = aInDecimal + bInDecimal;
    //console.log('>> aInDecimal', aInDecimal, bInDecimal, sum);

    let remainder = 0;
    let binary = '';
    while (sum >= 1) {
        remainder = sum % 2;
        sum = (sum - remainder) / 2;
        binary += remainder;
    }
    //console.log('>> aInDecimal', aInDecimal, bInDecimal, sum, binary);
    return [...binary].reverse().join('');
};
console.log('>>> 1010, 1011', addBinary('1010', '1011'))
console.log('>>> 11, 1', addBinary('11', '1'))