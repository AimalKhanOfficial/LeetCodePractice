/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    const sentenceToComplete = sentence1.length <= sentence2.length ? sentence1.split(' ') : sentence2.split(' ');
    const sourceSentence = sentence1.length >= sentence2.length ? sentence1.split(' ') : sentence2.split(' ');
    let i = 0;
    let j = 0;
    let wordsNeeded = [];
    let sentenceBreakFound = false;
    while (i <= sourceSentence.length && j <= sentenceToComplete.length) {
        if (sourceSentence[i] === sentenceToComplete[j]) {
            i++;
            j++;
            continue;
        }
        else {
            sentenceBreakFound = true;
            wordsNeeded.push(sourceSentence[i]);
            i++;
        }
    }
    return true;
};

console.log('>> ', areSentencesSimilar(sentence1 = "My name is Haley", sentence2 = "My Haley"))
console.log('>> ', areSentencesSimilar(sentence1 = "of", sentence2 = "A lot of words"))
console.log('>> ', areSentencesSimilar(sentence1 = "Eating right now", sentence2 = "Eating"))