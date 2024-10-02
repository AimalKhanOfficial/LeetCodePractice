/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let arrCopy = [...arr];
    arrCopy = arrCopy.sort((a,b) => a-b).filter((value, index, self) => self.indexOf(value) === index);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = (arrCopy.indexOf(arr[i])) + 1;
    }
    return arr;
};

console.log('>>', arrayRankTransform([40,10,20,30]))

//[37,12,28,9,100,56,80,5,12]
//[5,9,12,12,28,37,56,80,100]