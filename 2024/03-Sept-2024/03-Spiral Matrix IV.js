const parseLinkedList = (head) => {
  let node = head;
  let arr = [];
  while (node.next) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
//STATUS: attempted but out of time - cannot continue - gets the top and right side correctly. 
//Need to get the bottom and left accordingly.
var spiralMatrix = function (m, n, head) {
  head = parseLinkedList(head);
  console.log('>> head', head)
  let arrToReturn = [];
  let stackValues = [];
  for (let i = 0; i < m; i++) {
    let newArr = [];
    for (let j = 0; j < n - 1; j++) {
      newArr.push(head[j] === undefined ? -1 : head[j]);
    }
    head.splice(0, n - 1);
    if (i === 0) {
      for (let k = 0; k < m; k++) {
        stackValues.push(head[k] !== undefined ? head[k] : -1);
      }
      head.splice(0, m);
    }
    console.log(">>head ", newArr, stackValues, head);
    return;
    //attempted but out of time
    let valAtTheEnd = stackValues.shift();
    newArr.push(valAtTheEnd);
    arrToReturn.push(newArr);
  }
  return arrToReturn;
};

console.log(
  ">>",
  spiralMatrix(
    (m = 3),
    (n = 5),
    (head = [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0])
  )
);
