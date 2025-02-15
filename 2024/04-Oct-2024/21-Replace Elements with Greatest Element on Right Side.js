const getGreatestNumberToTheRight = (number, arr = [17,18,5,4,6,1], startingIndex) => {
    if (startingIndex === arr.length) return -1;
    return Math.max(...arr.slice(startingIndex, arr.length));
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = getGreatestNumberToTheRight(arr[i], arr, i + 1);
    }
    return arr;
};