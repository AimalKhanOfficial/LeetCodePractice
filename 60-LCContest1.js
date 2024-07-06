


//https://leetcode.com/contest/biweekly-contest-134/problems/alternating-groups-i/submissions/1311634998/
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    if (!colors) return colors;
    let allPossibilities = [];
    for (let i = 0; i < colors.length; i++) {
        let counter = i;
        let possibility = [];
        for (let j = 0; j < 3; j++) {
            if (counter >= colors.length) {
                counter = 0;
            }
            possibility.push(colors[counter])
            counter++;
        }
        allPossibilities.push(possibility)
    }
    allPossibilities = allPossibilities.filter(possibility => possibility[1] !== possibility[0] && possibility[1] !== possibility[2])
    return allPossibilities.length;
};

console.log('>> [0,1,0,0,1]', numberOfAlternatingGroups([0,1,0,0,1]))
console.log('>> [1,1,1]', numberOfAlternatingGroups([1,1,1]))