//Solved - https://leetcode.com/problems/complement-of-base-10-integer/submissions/1387036577/

/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  n = n.toString(2).split("");
  let ans = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] === "0") {
      ans.push(1);
    } else {
      ans.push(0);
    }
  }
  ans = ans.join('');
  return parseInt(ans, 2);
};

console.log(">> ", bitwiseComplement((n = 5)));
