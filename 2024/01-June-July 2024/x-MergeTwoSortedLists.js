/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function LinkdedList() {
    this.head = null;
}

function addNode (val) {
    let node = this.head;
    if (!node) {
        node = new ListNode(val, null);
        return;
    }
    while (node) { 
        nextNode = nextNode.next;
    }
    node = new ListNode(val, null);
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    console.log('>>> linkedList1', linkedList1)
    // for (let i = 0; i < list1.length; i++) {
    //     console.log('>>> linkedList', list1[i])
    //     let newNode = new ListNode(list1[i], null);
    //     if (linkedList1.head === null) {
    //         linkedList1.head = newNode;
    //         linkedList1.tail = newNode;
    //     }
    //     else {
    //         linkedList1.tail = newNode;
    //         linkedList1.tail.next = newNode;
    //     }
    // }
    return true;
};

console.log('>> ', mergeTwoLists([1, 2, 4], [1, 3, 4]))