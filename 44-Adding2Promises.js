/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
//Solved - https://leetcode.com/problems/add-two-promises/submissions/1306021826/
var addTwoPromises = async function(promise1, promise2) {
    let [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
};
