/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    if (!num.toString().includes('6')) return num;
    let allOptions = [];
    num = num.toString().split('');
    let numCopy = [...num];
    for (let i = 0; i < numCopy.length; i++) {
        numCopy = [...num];
        if (numCopy[i] === '6') {
            numCopy[i] = '9';
        } else if (numCopy[i] === '9') {
            numCopy[i] = '6';
        }
        allOptions.push(parseInt(numCopy.join('')));
    }
    console.log('>> all', allOptions)
    return Math.max(...allOptions);
};

console.log('>> ', maximum69Number(num = 9999))