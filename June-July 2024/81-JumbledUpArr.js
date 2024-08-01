/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
//https://leetcode.com/problems/sort-the-jumbled-numbers/submissions/1332410763
var sortJumbled = function(mapping, nums) {
    let numMap = new Map();
    let mapperObj = {};
    let finalArr = [];
    for (let i = 0; i < nums.length; i++) {
        let numsSplit = nums[i].toString().split('');
        for (let j = 0; j < numsSplit.length; j++) {
            if (!numMap.has(parseInt(numsSplit[j]))) {
                numMap.set(parseInt(numsSplit[j]), mapping[parseInt(numsSplit[j])]);
            }
            numsSplit[j] = numMap.get(parseInt(numsSplit[j]));
        }
        let joinedValue = numsSplit.filter(a => a !== 0).join('');
        mapperObj = {...mapperObj, [nums[i]]: {
            value: joinedValue,
            order: i
        }};
    }
    Object.entries(mapperObj).sort((a, b) => a[1].value === b[1].value ? a[1].order - b[1].order : a[1].value - b[1].value).forEach(a => {
        finalArr.push(parseInt(a[0]));
    })
    return finalArr;
};

console.log('>>', sortJumbled(mapping = [9,8,7,6,5,4,3,2,1,0], nums = [0,1,2,3,4,5,6,7,8,9]))

//console.log('>>', sortJumbled(mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]))
//console.log('>>', sortJumbled(mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123]))
