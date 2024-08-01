
//Attempting = https://leetcode.com/problems/merge-nodes-in-between-zeros/description/

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const getMeALInkedList = (head) => {
    let listHead = null;
    let arr = [];
    for (let i = 0; i < head.length; i++) {
        arr.push(head[i]);
        if (listHead === null) {
            listHead = new ListNode(head[i]);
        }
        else {
            let curr = listHead;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = new ListNode(head[i]);
        }
    }
    return {
        listHead, 
        arr
    };
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    let {listHead, arr} = getMeALInkedList(head);
    console.log('>> arr', arr)
    return linkedList
};

console.log('>> ', mergeNodes(head = [0, 3, 1, 0, 4, 5, 2, 0]))