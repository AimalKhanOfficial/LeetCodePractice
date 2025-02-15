//solves about half of total use cases - still needs more work

var MyCalendar = function() {
    this.bookingRecords = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (let i = 0; i < this.bookingRecords.length; i++) {
        let [prevStart, prevEnd] = this.bookingRecords[i];
        if (start >= prevStart && start <= prevEnd - 1 || end - 1 >= prevStart && end - 1 <= prevEnd - 1) {
            return false;
        }
    }
    this.bookingRecords.push([start, end]);
    return true;
};

// 19,25?? - 25,32 - 33,41 - 47,50 -
// Your MyCalendar object will be instantiated and called as such:
let obj = new MyCalendar()
console.log('true: 47,50', obj.book(47,50));
console.log('true: 33,41', obj.book(33,41));
console.log('false: 39,45', obj.book(39,45));
console.log('false: 33,42', obj.book(33,42));
console.log('true: 25,32', obj.book(25,32));
console.log('false: 26,35', obj.book(26,35));
console.log('true: 19,25', obj.book(19,25));
console.log('true: 3,8', obj.book(3,8));
console.log('true: 8,13', obj.book(8,13));
console.log('false: 18,27', obj.book(18,27));


