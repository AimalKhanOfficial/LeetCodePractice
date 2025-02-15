/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let charNotFound = false;
    magazine = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        let index = magazine.indexOf(ransomNote[i]);
        if (index !== -1) {
            magazine.splice(index, 1);
        } else {
            charNotFound = true;
            break;
        }
    }
    return !charNotFound;
};

console.log('>>> ', canConstruct('fffbfg', 'effjfggbffjdgbjjhhdegh'));