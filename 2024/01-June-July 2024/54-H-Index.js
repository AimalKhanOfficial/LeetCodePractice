/**
 * @param {number[]} citations
 * @return {number}
 */
//[ 6, 5, 3, 1, 0 ]
//[ 3, 1, 1 ]
//[ 15, 11]
var hIndex = function (citations) {
    if (citations.length === 1 && citations[0] > 0) return 1;
    citations = citations.sort((a, b) => b - a);
    console.log('>> citations', citations)
    let totalCitations = citations.length;
    for (let i = 0; i < citations.length; i++) {
       if (citations[i]  === 0) {
        totalCitations--;
        continue;
       }
    }
    return totalCitations;
};
//console.log('>>>', hIndex([11,15]))
console.log('>>>', hIndex([3, 0, 6, 1, 5]))
//console.log('>>>', hIndex([1,3,1]))
//console.log('>>>', hIndex([100]))


//Second Attempt
// var hIndex = function (citations) {
//     citations = citations.sort((a, b) => b - a);
//     if (citations.length === 1 && citations[0] > 0) return 1;
//     let citationMap = {};
//     let counter = 0;
//     //console.log('>>> working with: ', citations);
//     let runningCountOfCitations = 0;
//     let result = 0;
//     for (let i = 0; i < citations.length; i++) {
//         if (citations[i] === 0) continue;
//         runningCountOfCitations = 0;
//         for (let j = 0; j < citations.length; j++) {
//             if (citations[i] <= citations[j]) {
//                 runningCountOfCitations++;
//             }
//         }
//         //The h-index is defined as 
//         //the maximum value of h 
//         //such that the given researcher has published at least h papers 
//         //that have each been cited at least h times.
//         if (!citationMap[citations[i]] && citations[i] <= citations.length) {
//             counter++;
//             citationMap[citations[i]] = runningCountOfCitations;
//         }
//     }
//     console.log('>> counter', counter)
//     return Object.entries(citationMap).filter(pair => pair[1] === counter);
// };


// First Attempt
// var hIndex = function(citations) {
//     if (citations.length === 1 && citations[0] > 0) return 1;
//     citations = citations.sort((a, b) => b - a);
//     //console.log('>> citation', citations, citations.length)
//     let numberOfCitations = 0;
//     let result = 0;
//     for (let i = 0; i < citations.length; i++) {
//         //citation more than the total # of citations? move on to next item
//         if (citations[i] === 0 || citations[i] > citations.length) continue;

//         numberOfCitations = 0;
//         for (let j = 0; j < citations.length; j++) {
//             //if index same, move on to next item
//             if (i === j) {
//                 numberOfCitations++;
//                 continue;
//             };

//             //we've a citation mismatch, need to adjust ceiling
//             if (citations[i] > citations[j]) {
//                 break;
//             }
//             else {
//                 //increase citation count
//                 numberOfCitations++;
//             }
//         }
//         //console.log('>> citation', citations[i], 'numberOfCitations', numberOfCitations)
//         //exit point
//         if (citations[i] <= numberOfCitations) {
//             result = citations[i];
//             break;
//         }
//     }
//     return result;
// };