/**
 * @param {string} word
 * @return {boolean}
 */
//Solved - https://leetcode.com/problems/remove-letter-to-equalize-frequency/submissions/1315227241/
var equalFrequency = function(word) {
    let arr = new Array(26).fill(0);
    for (let char of word) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[index]++;
    }
    arr = arr.filter(freq => freq > 0);
    let testArr = arr.filter((value, index, self) => self.indexOf(value) === index);
    if (testArr.length === 1 && !testArr.find(a => a > 1)) {
        return true;
    }
    let resultsArr = [];
    //console.log('>> arr', arr);
    for (let i = 0; i < arr.length; i++) {
        let result = true;
        let arrCopy = [...arr];
        arrCopy[i] = arrCopy[i] - 1;
        if (arrCopy[i] === 0) {
            arrCopy.splice(i, 1);
        }
        arrCopy = arrCopy.filter((value, index, self) => self.indexOf(value) === index);
        if (arrCopy.length > 1) {
            //console.log('>> false for', arrCopy)
            result = false;
        }
        resultsArr.push(result);  
    }
    //console.log('>> result', resultsArr)
    return resultsArr.includes(true);
};

console.log('>>>true', equalFrequency('abcc'))
console.log('>>>false', equalFrequency('aabbcc'))
console.log('>>>true', equalFrequency('bac'))
console.log('>>>true', equalFrequency('abbcc'))
//console.log('>>>cccaa', equalFrequency('cccaa'))
//console.log('>>>aazz', equalFrequency('aazz'))
