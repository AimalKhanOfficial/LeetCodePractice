//https://leetcode.com/problems/sort-by/submissions/1357885783/
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    if (!arr) return [];
    let testItem = arr[0];
    if (typeof(testItem) === 'number') {
        return arr.sort((a, b) => a - b);
    } else {
        return arr.sort((a, b) => fn(a) - fn(b));
    }
};