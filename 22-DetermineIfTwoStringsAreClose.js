/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
let sortAndRespond = (word1, word2) => {
    let sortedWord1 = word1.split('').sort().join('');
    let sortedWord2 = word2.split('').sort().join('');
    return ({
        sortedWord1,
        sortedWord2,
        sortResult: word1 === word2
    });
}

function createFrequencyArray(word) {
    // Initialize an array of size 26 with all elements set to 0
    const frequencyArray = new Array(26).fill(0);
    // Loop through each character in the word
    for (let char of word) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        // Increment the frequency at the calculated index
        frequencyArray[index]++;
    }
    return frequencyArray;
}

//Attempt # 1 - Passes about 43 test cases, will be back to complete this 
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length || !word1 || !word2) return false;

    const freq1 = createFrequencyArray(word1);
    const freq2 = createFrequencyArray(word2);
    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false;
        }
    }
    let { sortedWord1, sortedWord2, sortResult } = sortAndRespond(word1, word2);
    //performing a sort and match first - alternative to swap search IMO
    if (sortResult) return true;

    return true;
    //if unmatched, performing a replace:
    // let continueLoop = true;
    // let index = 0;
    // let alreadySwappedIndexes = [];
    // while (continueLoop) {
    //     //swap possible?  'abbbac', 'abbccc' [5,4]
    //     if (word1[index] !== word2[index]) {
    //         let swapCandidateIndex = word1.lastIndexOf(word2[i]);
    //         //performing swap
    //         if (swapCandidateIndex !== -1) {

    //             //already swapped?
    //             if (alreadySwappedIndexes.includes(swapCandidateIndex)) {
    //                 //STUCK HERE
    //             }

    //             let swapChar = word1[swapCandidateIndex];
    //             word1[swapCandidateIndex] = word1[i];
    //             word1[index] === swapChar;
    //             alreadySwappedIndexes.push(index);
    //         }
    //     }
    //     index++;
    // }
};

console.log('>>> cabbba, abbccc', closeStrings('a', 'aa'))