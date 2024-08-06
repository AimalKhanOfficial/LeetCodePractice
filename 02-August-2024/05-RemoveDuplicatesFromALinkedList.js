//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const getMeALinkedList = (head) => {
    let linkedList = null;
    for (let i = 0; i < head.length; i++) {
        if (linkedList === null) {
            linkedList = new ListNode(head[i]);
        }
        else {
            curr = linkedList;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = new ListNode(head[i]);
        }
    }
    return linkedList;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return [];
    let linkedList = getMeALinkedList(head);
    let reviewedNodes = [];
    if (linkedList) {
        reviewedNodes.push(linkedList.val);
    }
    let prev = linkedList;
    let curr = linkedList.next;
    while (curr) {
        if (!reviewedNodes.includes(curr.val)) {
            reviewedNodes.push(curr.val);
        } else {
            if (curr.next) {
                let next = curr.next;
                prev.next = next;
                curr = next;
            } else {
                prev.next = null;
            }
        }
        prev = curr;
        curr = curr.next;
    }
    return linkedList;
};

console.log('>> deleteDuplicates', JSON.stringify(deleteDuplicates([1,1])))