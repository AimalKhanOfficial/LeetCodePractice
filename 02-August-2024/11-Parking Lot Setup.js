/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
//Solved - https://leetcode.com/problems/design-parking-system/submissions/1349322235/
var ParkingSystem = function (big, medium, small) {
    this.bigSlots = big;
    this.mediumSlots = medium;
    this.smallSlots = small;
    this.lotMap = {
        1: this.bigSlots,
        2: this.mediumSlots,
        3: this.smallSlots,
    };
}

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (!carType || !this.lotMap[carType]) return false;

    this.lotMap[carType]--;
    return true;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * 
 * var param_1 = 
 */

var obj = new ParkingSystem(1, 1, 1);
console.log('>>>', obj.addCar(1))
console.log('>>>', obj.addCar(1))