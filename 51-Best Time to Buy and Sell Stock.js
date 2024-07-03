/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profitArr = [];
    console.log('>> prices', prices)
    for (let i = 0; i < prices.length; i++) {
        if (i + 1 === prices.length) break;
        if (prices[i + 1] - prices[i] <= 0) continue; 
        for (let j = i + 1; j < prices.length; j++) {
            profitArr.push(prices[j] - prices[i]);
        }
    }
    return profitArr.length === 0 ? profitArr : Math.max(...profitArr)
};

console.log('>> [2,4,1]', maxProfit([7,1,5,3,6,4]))