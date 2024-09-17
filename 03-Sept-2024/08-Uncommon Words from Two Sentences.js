/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
//Solved = https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/1393765181/
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(' ');
    s2 = s2.split(' ');
    let s1Map = {};
    for (let i = 0; i < s1.length; i++) {
        if (!s1Map[s1[i]]) {
            s1Map[s1[i]] = 1;
        } else {
            s1Map[s1[i]] = s1Map[s1[i]] + 1;
        }
    }
    let s2Map = {};
    for (let i = 0; i < s2.length; i++) {
        if (!s2Map[s2[i]]) {
            s2Map[s2[i]] = 1;
        } else {
            s2Map[s2[i]] = s2Map[s2[i]] + 1;
        }
    }
    console.log('>> maps', s1Map, s2Map);
    let uncommonWords = [];
    for (let entries of Object.entries(s1Map)) {
        if (entries[1] > 1) {
            continue;
        }
        if (!s2Map[entries[0]]) {
            uncommonWords.push(entries[0]);
        }
    }
    for (let entries of Object.entries(s2Map)) {
        if (entries[1] > 1) {
            continue;
        }
        if (!s1Map[entries[0]]) {
            uncommonWords.push(entries[0]);
        }
    }
    return uncommonWords;
};

console.log('>> ', uncommonFromSentences(s1 = "evg nnwc hv evg nq nvzrc hv pelf nnwc nnwc nnwc ya", s2 = "pelf nq hv evg nq uyfer lyz n xmksf znrji nvzrc"))