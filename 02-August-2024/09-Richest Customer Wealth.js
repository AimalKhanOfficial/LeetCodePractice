/**
 * @param {number[][]} accounts
 * @return {number}
 */
//Solved - https://leetcode.com/problems/richest-customer-wealth/submissions/1348243215/
var maximumWealth = function(accounts) {
    let allSums = [];
    for (let i = 0; i < accounts.length; i++) {
        let iThSum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            iThSum += accounts[i][j];
        }
        allSums.push(iThSum);
    }
    return Math.max(...allSums);
};