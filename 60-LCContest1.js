//Q1 - https://leetcode.com/contest/biweekly-contest-134/problems/alternating-groups-i/submissions/1311634998/
//Q2 - https://leetcode.com/contest/biweekly-contest-134/problems/alternating-groups-ii/submissions/1311681412/
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    if (!colors) return colors;
    let allPossibilities = [];
    for (let i = 0; i < colors.length; i++) {
        let counter = i;
        let possibility = [];
        for (let j = 0; j < k; j++) {
            if (counter >= colors.length) {
                counter = 0;
            }
            possibility.push(colors[counter])
            counter++;
        }
        allPossibilities.push(possibility)
    }
    allPossibilities = allPossibilities.filter(possibility => {
        for (let i = 0; i < possibility.length; i++) {
            if (i === 0 || i === possibility.length) continue;
            if (i + 1 === possibility.length) break;
            if (possibility[i] !== possibility[i - 1] && possibility[i] !== possibility[i + 1]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    })
    //console.log('>> allPossibilities', allPossibilities)
    return allPossibilities.length;
};

//Q#2
console.log('>> [0,1,0,0,1]', numberOfAlternatingGroups([0,1,0,1,0], 3))
console.log('>> [0,1,0,0,1,0,1]', numberOfAlternatingGroups([0,1,0,0,1,0,1], 6))
console.log('>> [1,1,0,1]', numberOfAlternatingGroups([1,1,0,1], 4))

//Q#1
//console.log('>> [1,1,1]', numberOfAlternatingGroups([1,1,1]))