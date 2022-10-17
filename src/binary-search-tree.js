const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      this.findPlace(this.rootNode, new Node(data));
    }
  }

  findPlace(parent, newNode) {
    //for (let i=0; i<parent.depth;i++){}
    if (newNode.data < parent.data) {
      if (parent.left === null) {
        parent.left = newNode;
      } else {
        this.findPlace(parent.left, newNode);
      }
    } else {
      if (parent.right === null) {
        parent.right = newNode;
      } else {
        this.findPlace(parent.right, newNode);
      }
    }
  }

  has(data) {}

  find(data) {}

  remove(data) {}

  min() {
    return this.findMin(this.rootNode).data;
  }
  findMin(root) {
    if (root.left === null) {
      return root;
    } else {
      return this.findMin(root.left);
    }
  }

  max() {
    return this.findMax(this.rootNode).data;
  }
  findMax(root) {
    if (root.right === null) {
      return root;
    } else {
      return this.findMax(root.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
