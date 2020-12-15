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
 * @return {TreeNode}
 */

// I: binary tree
// O: increasing order binary tree (leftmost node in tree is root and every node has no left child and only 1 right child)
// C: 1 <= Node.val <= 1000, number of nodes = [1, 100]
// E: none

var increasingBST = function(root) {
  // traverse all the way to left most node and assign as root
  // move up 1 level and set the parent node as right child
  // if that node has right child, check the right child and see if it has children
  // move up another layer and repeat
  // always left > parent > right
  // recursion
  // base case
  // if there is left, traverse down left
  // if there is right, add parent then traverse down

  var tree = null;
  var findRoot = true;
  var arr = [];

  var reorderTree = function(node) {
    // need to find the smallest value to set as root
    // code starts by going down the left side. as soon as the first left node is non-existant
    // accounts for furthest left node and the case in which a parent node is the smallest
    if (!node.left && !node.right) {
      if (findRoot) {
        // tree = node;
        findRoot = false;
        arr.push(node);
      } else {
        arr.push(node);
        //tree.right = node;
      }
      return;
    }
    if (node.left) {
      reorderTree(node.left)
    }
    if (node.right) {
      if (findRoot) {
        // tree = node;
        findRoot = false;
        arr.push(node);
        reorderTree(node.right);
      } else {
        // tree.right = node;
        arr.push(node);
        reorderTree(node.right);
      }
    }
  }

  reorderTree(root);
  return tree;
};

var increasingBST = function(root) {
  var tree = null;
  var findRoot = true;
  var result = [];

  var reorderTree = function(node) {
  if (!node.left && !node.right) {
    result.push(node.val);
    return;
  }
  if (node.left) {
    reorderTree(node.left)
  }
  result.push(node.val);
  if (node.right) {
    reorderTree(node.right);
  }
  }

  reorderTree(root);

  tree = new TreeNode(result[0]);
  //console.log(result)
  var counter = 1;
  var addToTree = function(node) {
      node.right = new TreeNode(result[counter]);
      counter++;
      addToTree(node.right)
  }

  addToTree(tree);
  return tree;
};
