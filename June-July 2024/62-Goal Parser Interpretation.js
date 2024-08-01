/**
 * @param {string} command
 * @return {string}
 */
//Solved - https://leetcode.com/problems/goal-parser-interpretation/submissions/1313860886/
var interpret = function(command) {
    return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
};