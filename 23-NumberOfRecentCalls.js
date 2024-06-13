var RecentCounter = function() {
    this.requestCounter = 0;
    this.requestCounterQueue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requestCounterQueue.push(t);
    let [first, second] = [t - 3000, t];
    return this.requestCounterQueue.filter(a => a >= first && a <= second).length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

let recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // requests = [1], range is [-2999,1], return 1
console.log(recentCounter.ping(100));   // requests = [1, 100], range is [-2900,100], return 2
console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001], range is [1,3001], return 3
console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3