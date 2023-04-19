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
 * @return {number}
 */
var longestZigZag = function(root) {
    let max_length = 0;
    
    const zigzag_traversal = (node, direction, length) => {
        if (!node) return;
    
    max_length = Math.max(max_length, length);
    
    zigzag_traversal(node.right, "right", 1 + (direction === "left") * length);
    zigzag_traversal(node.left, "left", 1 +(direction === "right") * length);
    }
    
    zigzag_traversal(root, null, 0);
    return max_length;
};