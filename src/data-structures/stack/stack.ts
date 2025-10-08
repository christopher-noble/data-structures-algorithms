import { ClassNode } from "./node";

class Stack<T> {
  private top: ClassNode<T> | null;
  private size: number;

  constructor() {
    this.top = null;
    this.size = 0;
  }

  public push(data: T): T {
    const node = new ClassNode(data, null);

    if (!this.top) {
      this.top = node;

      return this.top.data;
    }

    node.prev = this.top;
    this.top = node;

    return this.top.data;
  }

  public peek(): T | null {
    if (!this.top) {
      return null;
    }

    return this.top.data;
  }

  public pop(): T | null {
    if (!this.top) {
      return null;
    }

    let poppedTopData = this.top.data;

    this.top = this.top.prev;
    this.size--;

    return poppedTopData;
  }

  public isEmpty(): boolean {
    if (this.size > 0) {
      return false;
    }

    return true;
  }
}

export { Stack };

const stack = new Stack();

stack.push(1);
stack.push(5);
stack.push(2);
stack.push(2);
stack.push(4);
stack.push(8);

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty());
console.log(stack.peek());
