
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/* @param {ListNode} head
* @return {ListNode}
*/

1, 2, 3, 4, 5, 6, 7
P  E

1, 3, 2, 4, 5, 6, 7
   P     E

1, 3, 5, 2, 4, 6, 7
   

1, 3, 5, 5, 2, 4, 6


var oddEvenList = function (head) {
    if (!head) return head;
    if (head.next === null) return head;
    let prev = head;
    let even = head.next;
    while (even.next !== null) {
        //swap
        let prevNext = prev.next; //even reference
        prev.next = even.next;
        prev.next.next = prevNext
        even.next = even.next;
        prev = prev.next;
        //moving pointers forward
        // prev = prev.next;
        // even = even.next;
    }
    return head;
};

console.log('>>> [1,2,3,4,5]', oddEvenList([1,2,3,4,5]))

// prev.next = even.next;
//         prev.next.next = even;
//         prev = prev.next;
//         even = even.next;