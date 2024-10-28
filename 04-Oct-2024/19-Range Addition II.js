const createMatrix = (rows, columns) => {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}

const incrementMatrixValuesByOne = (rows, columns, matrix) => {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            matrix[i][j]++;
        }
    }
    return matrix;
}

const countAndDetermineMax = (matrix) => {
    const valuesMap = new Map();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(!valuesMap.has(matrix[i][j])) {
                valuesMap.set(matrix[i][j], 1)
            } else {
                valuesMap.set(matrix[i][j], valuesMap.get(matrix[i][j]) + 1)
            }
        }
    }
    return new Map([...valuesMap.entries()].sort((a, b) => a[1] - b[1]));
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (m === 0 || n === 0) return 0;
    if (ops.length === 0) return m * n;
    
    let matrix = createMatrix(m, n);
    for (let i = 0; i < ops.length; i++) {
        matrix = incrementMatrixValuesByOne(ops[i][0], ops[i][1], matrix)
    }
    let matrixValuesMap = countAndDetermineMax(matrix);
    return [...matrixValuesMap.entries()][0][1];
};

console.log('>>> ', maxCount(m = 0, n = 0, ops = []))