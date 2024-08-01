
//Attempting = https://leetcode.com/problems/merge-nodes-in-between-zeros/description/

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const getMeALInkedList = (head) => {
    let listHead = null;
    for (let i = 0; i < head.length; i++) {
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
    return listHead;
}

const getMeAnArrFromALinkedList = (head) => {
    let arr = [];
    let sum = 0;
    let anotherArr = [];
    let allowSum = false;

    let curr = head;
    while (curr.next) {
        if (curr.val === 0) {
            if (allowSum) {
                anotherArr.push(sum);
                sum = 0;
            }
            else {
                allowSum = true;
            }
        }

        if (allowSum) {
            sum += curr.val;
        }

        arr.push(curr.val);
        curr = curr.next;
    }
    arr.push(curr.val);
    anotherArr.push(sum);

    return { arr, anotherArr };
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    const {anotherArr} = getMeAnArrFromALinkedList(head);
    return getMeALInkedList(anotherArr);
};

console.log('>> ', mergeNodes(head = [0, 3, 1, 0, 4, 5, 2, 0]))