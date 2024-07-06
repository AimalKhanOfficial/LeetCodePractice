/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let possibilities = [];
    let grumpyCopy = [...grumpy];
    let counter = 0;
    for (let i = 0; i < grumpy.length; i++) {
        grumpyCopy = [...grumpy];
        counter = i;
        for (let j = 0; j < minutes; j++) {
            if (grumpyCopy[counter] === 1) {
                grumpyCopy[counter] = 0;
            }
            //console.log('counter', counter, grumpyCopy)
            counter++;
            if (counter > grumpyCopy.length) continue;
        }
        //console.log('result', grumpyCopy)
        possibilities.push(grumpyCopy);
    }
    
    let allSatisfiedCustomers = [];
    for (let i = 0; i < possibilities.length; i++) { 
        let satisfiedCustomerPerSession = 0;
        for (let j = 0; j < possibilities[i].length; j++) {
            if (possibilities[i][j] === 0) {
                satisfiedCustomerPerSession += customers[j];
            }
        }
        allSatisfiedCustomers.push(satisfiedCustomerPerSession);
    }
    return Math.max(...allSatisfiedCustomers);
};

console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3))
console.log(maxSatisfied([1],[0],1))