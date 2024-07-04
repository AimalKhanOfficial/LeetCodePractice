/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    console.log('>>>', [...magazine.split('')].sort())
    return [...magazine.split('')].sort().join('').indexOf(ransomNote) !== -1 || magazine.includes(ransomNote);
};

console.log('>>> ', canConstruct('aab', 'baa'));