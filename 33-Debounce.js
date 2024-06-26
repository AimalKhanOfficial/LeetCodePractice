/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
//https://leetcode.com/problems/debounce/description/
let stack = [];
let counter = 0;
var debounce = function(fn, t) {
    return function(...args) {
        //Needs to be reviewed and worked on
        // if(stack.length > 0) {
        //     let previewCall = stack.pop();
        //     clearTimeout(previewCall);
        //     counter++;
        //     stack.push(setTimeout(fn, counter * t, ...args))
        // } else {
        //     stack.push(setTimeout(fn, t, ...args))
        // }
        setTimeout(fn, t, ...args)
    };
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
 
