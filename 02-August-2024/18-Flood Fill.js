/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let finalArr = [];
    for (let i = 0; i < image.length; i++) {
        let arr = [];
        for (let j = 0; j < image[i].length; j++) {
            if (i === 0) {
                arr.push(color);
            }
            else if (j === 0) {
                arr.push(color);
            }
            else if (i === sr && sc === j) {
                arr.push(color);
            }
            else {
                arr.push(image[i][j]);
            }
        }
        finalArr.push(arr);
    }
    return finalArr;
};

console.log('>>>', floodFill(image = [[0,0,0],[0,0,0]], sr = 1, sc = 0, color = 2))
// console.log('>>>', floodFill(image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2))
// console.log('>>>', floodFill(image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0))