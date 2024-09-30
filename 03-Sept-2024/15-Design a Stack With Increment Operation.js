//MEDIUM LC - Solved - https://leetcode.com/problems/design-a-stack-with-increment-operation/submissions/1407054274/?envType=daily-question&envId=2024-09-30

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = [];
    this.stackSize = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length >= this.stackSize) {
        return;
    }

    this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        return this.stack.pop();
    } else {
        return -1;
    }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {

    let index = 0;
    let counter = 0;
    while (counter < k && counter < this.stack.length) {
        this.stack[index] += val;
        index++;
        counter++;
    }
};

var obj = new CustomStack(3)
obj.push(1);
obj.push(2);
var param_2 = obj.pop();
console.log('>> popped: ', param_2);
obj.push(2);
obj.push(3);
obj.push(4);

//stacksize 3 - increment 5
obj.increment(5,100);
obj.increment(2,100);

console.log('>> popped: ', obj.pop());
console.log('>> popped: ', obj.pop());
console.log('>> popped: ', obj.pop());
console.log('>> popped: ', obj.pop());