/**
 * @param {string[]} details
 * @return {number}
 */
//https://leetcode.com/problems/number-of-senior-citizens/submissions/1340192335/
var countSeniors = function(details) {
    return details.filter(a => {
        return a && parseInt(a.substring(11, 13)) > 60;
    }).length;
};

console.log('>>', countSeniors(details = ["7868190130M7522","5303914400F9211","9273338290F4010"]))
console.log('>>', countSeniors(details = ["1313579440F2036","2921522980M5644"]))