/**
 * @param {character[]} chars
 * @return {number}
 */
//works but leet code won't accept it 
//Im satisfied tho - https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75
var compress = function (chars) {
    let counter = 1;
    let arrayToReturn = [];
    for (let i = 0; i < chars.length; i++) {
        arrayToReturn.push(chars[i]);
        counter = 1;
        for (let j = i + 1; j < chars.length; j++) {
            if (chars[j] === chars[i]) {
                counter++;
                i++;
            }
            else {
                break;
            }
        }
        if (counter > 1) {
            if (counter > 9) {
                arrayToReturn.push(...counter.toString().split(''));
            }
            else {
                arrayToReturn.push(counter.toString());
            }
        }
    }
    chars = arrayToReturn;
    console.log('chars', chars)
    return chars.length;
};

console.log('>>> compressed', compress(["a", "a", "b", "b", "c", "c", "c"]))
console.log('>>> compressed', compress(["a"]))
console.log('>>> compressed', compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))