/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let duplicateIndexes = [];
    nums.filter((value, index, self) => self.indexOf(value) !== index ? duplicateIndexes.push(index) : '');
    //console.log('>> duplicateIndexes', duplicateIndexes)
    for (let i = 0; i < duplicateIndexes.length; i++) {
        nums[duplicateIndexes[i]] = '_';
    }
    //console.log('>> before nums', nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === '_') {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] !== '_') {
                    nums[i] = nums[j];
                    nums[j] = '_';
                    break;
                }
            }

        }
    }
    //console.log('>> after nums', nums);
    return nums.length - duplicateIndexes.length;
};

console.log('>> removeDupes', removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))