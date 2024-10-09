
var RandomizedSet = function() {
    this.randomizedSet = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.randomizedSet.has(val)) {
        this.randomizedSet.set(val, 0);
        return true;
    } else {
        return false;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.randomizedSet.has(val)) {
        this.randomizedSet.delete(val);
        return true;
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.randomizedSet.size);
    return [...this.randomizedSet.keys()][randomIndex];
};

var obj = new RandomizedSet()
console.log('>> insert',obj.insert(1));
console.log('>> remove',obj.remove(2));
console.log('>> insert',obj.insert(2));
console.log('>> getRandom',obj.getRandom());
console.log('>> remove',obj.remove(1));
console.log('>> insert',obj.insert(2));
console.log('>> getRandom',obj.getRandom());
