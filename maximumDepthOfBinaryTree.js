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

// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Note: A leaf is a node with no children.
// Example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var maxDepth = function(root) {
  // var depth = 1;
  debugger;
  if (!root) {
    return 0;
  }
  var current = 1;
  var max = 1;
  var traverseTree =  function(node) {
    if (node.left || node.right) {
      if (node.left) {
        current++;
        traverseTree(node.left)
      }
      if (node.right) {
        current++;
        traverseTree(node.right)
      }
    } else {
      if (current > max) {
        max = current;
      }
    }
    current--;
  }

  traverseTree(root);
  return max;
};

// Given binary tree [3,9,20,null,null,15,7],
// var root = new TreeNode(3, 9, 20);
//var root = [];
// root.left = new TreeNode(3, null, null);
// root.right = new TreeNode(20, 15, 7);
// console.log(root);
// console.log(root.left);
// console.log(root.right);



// [1,2,3,4,null,null,5]
var root = new TreeNode(1, 2, 3)
root.left = new TreeNode(2, 4, null)
root.right = new TreeNode(3, null, 5)
console.log(maxDepth(root));

debugger;