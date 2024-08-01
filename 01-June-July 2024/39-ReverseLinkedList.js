/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//https://leetcode.com/problems/reverse-linked-list/?envType=study-plan-v2&envId=leetcode-75
var reverseList = function (head) {
    if (!head) return head;
    let allValues = [];
    while(head) {
        allValues.push(head.val);
        head = head.next;
    }
    let newNode = undefined;
    allValues.reverse().forEach(val => {
        if (!newNode) {
            newNode = new ListNode(val, null);
        }
        else {
            let node = new ListNode(val, null);
            let current = newNode;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    });
    return newNode;
};