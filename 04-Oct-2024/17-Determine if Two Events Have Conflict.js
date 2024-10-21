const formatAndReAssign = (event) => {
    for (let i = 0; i < event.length; i++) {
        event[i] = parseInt(event[i].replace(':', '').trim());
    }
    return event;
}

const determineOverlap = (start, end, toCompare) => {
    return start >= toCompare[0] && start <= toCompare[1] || end >= toCompare[0] && end <= toCompare[1];
}

/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    event1 = formatAndReAssign(event1);
    event2 = formatAndReAssign(event2);
    return determineOverlap(event1[0], event1[1], event2) || determineOverlap(event2[0], event2[1], event1);
};

console.log('>>', haveConflict(event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]))