function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var oddEvenList = function (head) {
    if (!head) return head;
    if (head.next === null) return head;
    let newList = null;
    for (let i = 0; i < head.length; i++) {
        if (!newList) {
            newList = new ListNode(head[i]);
        } else {
            let current = newList;
            while (current.next) {
                current = current.next;
            }
            current.next = new ListNode(head[i])
        }
    } 
    //console.log('>> head', newList, head)

    //current.next      -> 2
    //current.next.next -> 3
   
    head = newList;
    let current = head;
    let oddList = new ListNode(0);
    let oddPointer = oddList;
    let evenList = new ListNode(0);
    let evenPointer = evenList;
    while (current.next) {
        //even number?
        if (current.val % 2 === 0) {
            oddList = new 
        } 
        else {

        }
        console.log('>>> current', current)
        current = current.next;
    }
    //return head;
}

console.log('>>> [1,2,3,4,5]', oddEvenList([1,2,3,4,5]))