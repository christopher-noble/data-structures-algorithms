import { ClassNode } from "./node";

class BinarySearchTree<T> {
  public root: ClassNode<T> | null;

  constructor(root: ClassNode<T> | null) {
    this.root = root;
  }

  public add(data: T): void {
    const node = new ClassNode(data, null, null);

    if (this.root?.data === node.data) {
      console.log("Failed to add. Node data cannot be duplicated.");
      return;
    }

    if (!this.root) {
      this.root = node;
      return;
    }

    this.traverse(this.root, node);
  }

  public traverse(parentNode: ClassNode<T> | null, node: ClassNode<T>): void {
    if (!parentNode) {
      return;
    }

    if (node.data < parentNode.data) {
      if (!parentNode.left) {
        parentNode.left = node;
      }
      this.traverse(parentNode.left, node);
    }

    if (node.data > parentNode.data) {
      if (!parentNode.right) {
        parentNode.right = node;
      }
      this.traverse(parentNode.right, node);
    }
  }

  public print(node: ClassNode<T> | null): void {
    if (!node) {
      return;
    }

    console.log(
      node.data,
      node.left ? node.left.data : null,
      node.right ? node.right.data : null
    );

    this.print(node.left);
    this.print(node.right);
  }
}

export { BinarySearchTree };

const bst = new BinarySearchTree<number>(null);

bst.add(5);
bst.add(8);
bst.add(3);
bst.add(2);
bst.add(7);

bst.print(bst.root);
