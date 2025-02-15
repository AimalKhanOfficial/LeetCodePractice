const shouldLookForProfit = (prices, slicedPrice = [], buying= false) => {
    let pricesCopy = buying ? [...slicedPrice] : [...prices];
    pricesCopy = pricesCopy.sort((a, b) => a - b);
    const smallest = pricesCopy[0];
    const largest = pricesCopy.pop();
    const indexofSmallest = prices.indexOf(smallest);
    return largest - smallest > 0 ? ({
        botherLooking: true,
        indexofSmallest
    }) : ({
        botherLooking: false
    });
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let shouldBuy = false;
    let shouldSell = true;
    const { botherLooking, indexofSmallest } = shouldLookForProfit(prices);
    if (botherLooking) {
        let currentHoldings = prices[indexofSmallest];
        for (let i = indexofSmallest + 1; i < prices.length; i++) {
            if (shouldSell) {
                if ((prices[i] - currentHoldings) > 0) {
                    profit = profit + (prices[i] - currentHoldings);
                    currentHoldings = 0;
                    shouldBuy = true;
                    shouldSell = false;
                }
            } else {
                const { botherLooking, indexofSmallest } = shouldLookForProfit(prices, prices.slice(i, prices.length), true);
                
                if (botherLooking) {
                    i = indexofSmallest;
                    currentHoldings = prices[i];
                    shouldBuy = false;
                    shouldSell = true;
                }
            }
        }
    }
    return profit;
};

console.log('>>', maxProfit(prices = [1,2,3,4,5]))