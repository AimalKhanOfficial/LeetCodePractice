/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//Solved - https://leetcode.com/problems/binary-tree-inorder-traversal/
const walkTree = (node, arr) => {
    if (!node) return;
    walkTree(node.left, arr);
    arr.push(node.val);
    walkTree(node.right, arr);
}
var inorderTraversal = function(root) {
    if (!root) return [];
    let arr = [];
    walkTree(root, arr);
    return arr;
};