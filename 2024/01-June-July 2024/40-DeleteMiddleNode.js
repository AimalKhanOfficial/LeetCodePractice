/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//two pointer approach
var deleteMiddle = function(head) {
    if (!head) return head;
    if(head.next == null) return null;
    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
}

console.log('>>> delete', deleteMiddle([1,3,4,7,1,2,6]))

//time limit exceeded - https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/1303998352/?envType=study-plan-v2&envId=leetcode-75
// var deleteMiddle = function(head) {
//     if (!head) return head;
//     let allValues = [];
//     while(head) {
//         allValues.push(head.val);
//         head = head.next;
//     }
//     if (allValues.length === 1) return head;
//     let toDelete = Math.floor(allValues.length / 2);
//     allValues.splice(toDelete, 1);
//     let newNode = undefined;
//     allValues.forEach(val => {
//         if (!newNode) {
//             newNode = new ListNode(val, null);
//         }
//         else {
//             let node = new ListNode(val, null);
//             let current = newNode;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//     });
//     return newNode;
// };