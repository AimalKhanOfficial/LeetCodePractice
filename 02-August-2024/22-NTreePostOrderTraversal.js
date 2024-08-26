/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

//  let traverseArr = (node, arr) => {

//     if (node?.children?.length > 0) {
//         return traverseArr(node.children, arr);
//     }

//     for (let i = 0; i < node?.length; i++) {
//         if (node[i].children?.length > 0) {
//             traverseArr(node[i].children, arr);
//         } else {
//             arr.push(node[i].val);
//         }
//     }
//     console.log('>>', JSON.stringify(node))
//     arr.push(node.val);
//     return arr;
//  }

let traverseArr = (node, arr) => {
    if (node?.children?.length > 0) {
        traverseArr(node.children, arr);
    } else {
        for (let i = 0; i < node?.length; i++) {
            if (node[i].children?.length > 0) {
                traverseArr(node[i].children, arr);
            } else {
                //arr.push(node[i].val);
                traverseArr(node[i], arr);
            }
        }
    }
    //trying to insert root here

    console.log('>> node', node)
    if (node.val) {
        arr.push(node.val);
    }
    return arr;
 }


/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let arr = [];
    arr = traverseArr(root, arr);
    return arr;
};