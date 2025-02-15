/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
//https://leetcode.com/problems/debounce/description/
//couldn't solve it cuz it needs more time
let stack = [];
var debounce = function(fn, t) {
    return function(...args) {
        if(stack.length > 0) {
            let [timeoutCall, fnRef, time, allArgsArr] = stack.pop();
            clearTimeout(timeoutCall);
            stack.push([setTimeout(fnRef, time + t, ...args), fn, time + t, ...args])
        } else {
            stack.push([setTimeout(fn, t, ...args), fn, t, ...args])
        }
        stack.forEach(item => {
            let [timeoutCall, fnRef, time, allArgsArr] = stack.pop();
            timeoutCall;
        })
    };
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
 
