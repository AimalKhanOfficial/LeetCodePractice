/**
 * @param {number[]} arr
 * @return {boolean}
 */
//Solved - https://leetcode.com/problems/unique-number-of-occurrences/submissions/1267096388/?envType=study-plan-v2&envId=leetcode-75
var uniqueOccurrences = function (arr) {
    let hashMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (hashMap.has(arr[i])) {
            hashMap.set(arr[i], hashMap.get(arr[i]) + 1)
        }
        else {
            hashMap.set(arr[i], 1);
        }
    }
    let allOccurances = [...hashMap.values()]
    //console.log('>>>', allOccurances)
    allOccurances = allOccurances.filter(function(value,index,self){ return (self.indexOf(value) !== index )})
    //console.log('>>>', allOccurances)
    return allOccurances.length >= 1 ? false : true;
};

//console.log('>>> [1,2,2,1,1,3]', uniqueOccurrences([1, 2, 2, 1, 1, 3]))
//console.log('>>> [1,2]', uniqueOccurrences([1, 2]))
console.log('>>> [-3,0,1,-3,1,1,1,-3,10,0]', uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))