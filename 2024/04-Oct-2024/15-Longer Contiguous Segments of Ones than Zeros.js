const countSegments = (s, numberToCount) => {
    const segments = [];
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === numberToCount) {
            counter++;
        } else {
            segments.push(counter);
            counter = 0;
        }

        if (i === s.length - 1 && counter > 0) {
            segments.push(counter);
        }
    }
    return segments.filter(a => a !== 0);
}

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    s = s.split('');
    const oneSegments = countSegments(s, '1');
    const zeroSegments = countSegments(s, '0');
    return Math.max(...oneSegments) > Math.max(...zeroSegments);
};

console.log('>>', checkZeroOnes(s = ""))