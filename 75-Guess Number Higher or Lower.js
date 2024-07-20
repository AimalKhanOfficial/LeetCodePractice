/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let result = -1;
    let mid = 0;
    while (result != 0) {
        result = guess(n);
        //mid = parseInt(n / 2);
        if (result === -1) {
            n--;
        } else if (result === 1) {
            n++;
        }
    }
    return n;
};