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

  has(data) {
    return this.hasData(data, this.rootNode);
  }
  hasData(data, node) {
    if (data === node?.data) return true;

    if (data > node?.data && data?.right === null) {
      return false;
    } else if (data > node?.data) {
      return this.hasData(data, node.right);
    }
    if (data < node?.data && data?.left === null) {
      return false;
    } else if (data < node?.data) {
      return this.hasData(data, node.left);
    }
  }

  find(data) {
    return this.hasNodeWithData(data, this.rootNode);
  }
  hasNodeWithData(data, node) {
    if (data === node?.data) {
      return node;
    }

    if (data > node?.data && data?.right === null) {
      return null;
    } else if (data > node?.data) {
      return this.hasNodeWithData(data, node.right);
    }

    if (data < node?.data && data?.left === null) {
      return null;
    } else if (data < node?.data) {
      return this.hasNodeWithData(data, node.left);
    }
  }

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

const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);

console.log(tree.find(8));

module.exports = {
  BinarySearchTree,
};
