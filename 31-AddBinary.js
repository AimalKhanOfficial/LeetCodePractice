/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = '';
    let carryOver = '';
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] && b[i]) {
            if (a[i] === '0' && b[i] === '0') {
                if (carryOver === '1') {
                    sum += '1';
                    carryOver = '0';
                } else {
                    sum += '0';
                }
                console.log('>> adding', a[i], '+', b[i], sum, '. CarryOver:', carryOver)
            }
            else if (a[i] === '0' && b[i] === '1') {
                if (carryOver === '1') {
                    sum += '0';
                    carryOver = '0';
                } else {
                    sum += '1';
                }
                console.log('>> adding', a[i], '+', b[i], sum, '. CarryOver:', carryOver)
            }
            else if (a[i] === '1' && b[i] === '0') {
                if (carryOver === '1') {
                    sum += '0';
                    carryOver = '0';
                } else {
                    sum += '0';
                }
                console.log('>> adding', a[i], '+', b[i], sum, '. CarryOver:', carryOver)
            }
            else if (a[i] === '1' && b[i] === '1') {
                if (carryOver === '1') {
                    sum += '1';
                    carryOver = '1';
                } else {
                    sum += '0';
                    carryOver = '1';
                }
                console.log('>> adding', a[i], '+', b[i], sum, '. CarryOver:', carryOver)
            }
        }
        else if (!b[i]) {
            //console.log('>> sum', sum, a[i])
            sum += a[i];
            console.log('>> here adding', a[i], '+', b[i], sum, 'CarryOver:', carryOver)
        }
    }
    sum = sum + carryOver;
    console.log('>> final:', sum);
    return [...sum].reverse().join('');
};
//console.log('>>> 1010, 1011', addBinary('1010', '1011'))
console.log('>>> 11, 1', addBinary('11', '1'))