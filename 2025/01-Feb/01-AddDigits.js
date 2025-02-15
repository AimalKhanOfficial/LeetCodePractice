/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let result = num.toString().split('');
    let counter = 0;
    while (result.length > 1) {
        let resultX = 0;
        for (let i = 0; i < result.length; i++) {
            resultX += parseInt(result[i]);
        }
        result = resultX.toString().split('');
        counter++;
    }
    return parseInt(result.join(''));
};

console.log('>> 38', addDigits(0))