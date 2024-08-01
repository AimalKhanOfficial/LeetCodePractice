
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
//Attempted - https://leetcode.com/contest/weekly-contest-406/problems/delete-nodes-from-linked-list-present-in-array/submissions/1320349556/
//577 / 582 testcases passed :( SOO CLOSE
var modifiedList = function(nums, head) {
    if (!nums) return head;
    let curr = head;
    let shouldMoveOnFromHead = false;
    while (curr) {
        if (!shouldMoveOnFromHead) {
            let prevCurr = curr;
            if (nums.includes(curr.val)) {
                head = head.next;
                curr = head;
            }
            if (prevCurr === curr) {
                shouldMoveOnFromHead = true;
            }
        }
        else {
            if (curr.next) {
                if (nums.includes(curr.next.val)) {
                    curr.next = curr.next.next;
                }
                else {
                    curr = curr.next;
                }
            } else {
                break;
            }
        }
    }
    return head;
};

console.log('>> modifiedList', modifiedList([1,2,3], [1,2,3,4,5]))
console.log('>> modifiedList', modifiedList([1], [1, 2, 1, 2, 1, 2]))
console.log('>> modifiedList', modifiedList([5], [1,2,3,4]))

/**
 * @param {string} s
 * @return {string}
 */
//Solved - https://leetcode.com/contest/weekly-contest-406/problems/lexicographically-smallest-string-after-a-swap/submissions/1320250366/
var getSmallestString = function (s) {
    let arrCopy = s;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 === s.length) break;
        arrCopy = [...s]
        if (parseInt(s[i]) % 2 === 0 && parseInt(s[i + 1]) % 2 === 0 || parseInt(s[i]) % 2 !== 0 && parseInt(s[i + 1]) % 2 !== 0) {
            if (parseInt(s[i + 1]) < parseInt(s[i])) {
                let swap = arrCopy[i + 1];
                arrCopy[i + 1] = arrCopy[i];
                arrCopy[i] = swap;
                break;
            }
        }
    }
    return arrCopy.join('');
};

console.log('>> getSmallestString 32', getSmallestString('32'))
console.log('>> getSmallestString 43520', getSmallestString('45320'))
console.log('>> getSmallestString 001', getSmallestString('001'))