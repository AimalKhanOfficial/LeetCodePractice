/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
//Solved - https://leetcode.com/problems/sort-the-people/submissions/1329731928/?envType=daily-question&envId=2024-07-22
var sortPeople = function (names, heights) {
    let peopleWithHeights = {};
    let finalArr = [];
    for (let i = 0; i < heights.length; i++) {
        peopleWithHeights = { ...peopleWithHeights, [heights[i]]: names[i]};
    }
    //console.log('>> peopleWithHeights', peopleWithHeights)
    peopleWithHeights = [...Object.entries(peopleWithHeights).sort((a, b) => b[0] - a[0])].forEach(a => finalArr.push(a[1]));
    return finalArr;
};

console.log('>> expected: ["Mary","Emma","John"]. actual:', sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log('>> expected: ["Bob","Alice","Bob"]. actual:', sortPeople(["Alice","Bob","Bob"], [155,185,150]));