/**
 * @param {number} n
 * @return {number}
 */
//10110
var binaryGap = function(n) {
    const binaryVersion = n.toString(2).split('');
    const maxDistance = [];
    for (let i = 0; i < binaryVersion.length; i++) {
        if (binaryVersion[i] === '1') {
            let distance = 1;
            for (let j = i + 1; j < binaryVersion.length; j++) {
                if (binaryVersion[j] === '0') {
                    distance++;
                }
                if (binaryVersion[j] === '1') { 
                    maxDistance.push(distance);
                    break;
                }
            }
        }
    }
    return maxDistance.length > 0 ? Math.max(...maxDistance) : 0;
};

console.log('>> ', binaryGap(22))