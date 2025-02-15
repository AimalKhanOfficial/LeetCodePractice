const returnShortestAndLongest = (word1, word2) => {
    if (word1.length === word2.length) {
        return ({
            long: word1,
            short: word2
        });
    } else {
        return word1.length > word2.length ? ({ long: word1, short: word2 }) : ({ long: word2, short: word1 });
    }
}

const compareWordsAndReturnFlag = (long, short) => {
    let shouldIncrement = true;
    for (let k = 0; k < long.length; k++) {
        if (!short.includes(long[k])) {
            shouldIncrement = false;
            break;
        }
    }
    return shouldIncrement;
}

/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
    let totalPairs = 0;
    for (let i = 0; i < words.length; i++) {

        const j = i + 1;
        if (j === words.length) break;

        let wordsLongShort = returnShortestAndLongest(words[i], words[j]);
        let shouldIncrement = true;
        
        shouldIncrement = compareWordsAndReturnFlag(wordsLongShort.long, wordsLongShort.short);

        if (wordsLongShort.long.length === wordsLongShort.short.length) {
            shouldIncrement = compareWordsAndReturnFlag(wordsLongShort.short, wordsLongShort.long);
        }

        if (shouldIncrement) {
            totalPairs++;
        }
    }
    return totalPairs;
};

console.log('>> ', similarPairs(words = ["aabb","ab","ba"]))