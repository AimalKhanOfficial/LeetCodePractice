/**
 * @param {string} s
 * @return {number}
 */
//76 / 95 testcases passed
var maxUniqueSplit = function(s) {
    s = s.split('');
    const splitMap = [];
    for (let i = 0; i < s.length; i++) {
        if (!splitMap.includes(s[i])) {
            splitMap.push(s[i]);
        } else if (i + 1 === s.length && splitMap.includes(s[i + 1])) {
            splitMap.push(s[i] + s[i + 1]);
            i++;
        } else {
            let stringToPush = s[i];
            for (let j = i + 1; j < s.length; j++) {
                stringToPush += s[j];
                i++;
                if (!splitMap.includes(stringToPush)) {
                    splitMap.push(stringToPush);
                    break;
                }
            }
        }
    }
    console.log('>> splitMap', splitMap)
    return splitMap.length;
};

console.log('>> ', maxUniqueSplit(s = "wwwzfvedwfvhsww"))