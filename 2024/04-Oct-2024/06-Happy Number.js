//Solved - https://leetcode.com/problems/happy-number/submissions/1418551256/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let continueLoop = true;
    let endLessCombos = [];
    while (continueLoop) {
        let num = n.toString().split('');
        let sum = 0;

        for (let i = 0; i < num.length; i++) {
            sum += Math.pow(num[i],  2);
        }

        n = sum;
        endLessCombos.push(n);
        if (n === 1) {
            return true;
        }
        if (endLessCombos.length > 150) {
            return false
        }
    }
};

console.log('>> isHappy', isHappy(n = 2))
//console.log('>> isHappy', isHappy(n = 1))