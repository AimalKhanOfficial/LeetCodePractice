/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
//https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
//Submitted: https://leetcode.com/problems/merge-strings-alternately/submissions/1237427383/?envType=study-plan-v2&envId=leetcode-75
//Solved in about 45 min
let pickWord = (selectedWord, index) => selectedWord[index] ? selectedWord[index] : '';

var mergeAlternately = function(word1, word2) {
    if (!word1 && !word2) return '';
    let finalWord = '';
    let firstWordsturn = true;
    let indexToPick = 0;
    let incrementWord = 0;
    for (let i = 0; i < (word1.length + word2.length) * 2; i++) {
        finalWord += firstWordsturn ? pickWord(word1, indexToPick) : pickWord(word2, indexToPick);
        firstWordsturn = !firstWordsturn;
        incrementWord++;
        if (incrementWord === 2) {
            indexToPick++;
            incrementWord = 0;
        }
    }
    return finalWord;
};

console.log('>>> ', mergeAlternately('', 'abcd')) //abcd
console.log('>>> ', mergeAlternately('abc', 'pqr')) //apbqcr
console.log('>>> ', mergeAlternately('ab', 'pqrs')) //apbqrs
console.log('>>> ', mergeAlternately('abcd', 'pq')) //apbqcd