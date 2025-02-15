/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
//https://leetcode.com/problems/can-place-flowers/submissions/1241059398/?envType=study-plan-v2&envId=leetcode-75
var canPlaceFlowers = function(flowerbed, n) {
    let plantationPossible = []    
    let planted = false;
    for (let i = 0; i < n; i++) {
        planted = false;
        for (let j = 0; j < flowerbed.length; j++) {
            if (flowerbed[j] === 0){
                if ((flowerbed[j-1] === undefined || flowerbed[j-1] !== 1) && (flowerbed[j+1] === undefined || flowerbed[j+1] !== 1)){
                    flowerbed[j] = 1;
                    planted = true;
                    break;
                }
            }
        }
        //console.log('planted', planted);
        plantationPossible.push(planted);
    }
    //console.log(flowerbed, plantationPossible);
    return !plantationPossible.includes(false);
};

console.log(canPlaceFlowers([1,0,0,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2)) //true 
//[1,0,1,0,1,0,1]
//[1,0,0,0,0,0,1]
