/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let timeDifferences = [];
    for (let i = 0; i < timePoints.length; i++) {
        let time1 = new Date("1970-1-1 " + timePoints[i]);
        for (let j = i + 1; j < timePoints.length; j++) {
            let time2 = new Date("1970-1-1 " + timePoints[j]);
            console.log('>> times:', time1, time2) 
            timeDifferences.push((time1 - time2) / 1000 / 60);
        }
    }
    console.log('>> times', timeDifferences)
    return Math.min(...timeDifferences);
};

console.log('>> findMinDifference', findMinDifference(["23:59","00:00"]))