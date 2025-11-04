import { ClassNode } from "./node";

class Queue<T> {
  private head: ClassNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  public add(data: T): void {
    const node = new ClassNode<T>(data);

    if (!this.head) {
      this.head = node;
      this.size++;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this.size++;
  }

  public remove(): void {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }

    this.head = this.head.next;

    this.size--;
  }

  public peek(): T | null {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      return this.head.data;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    return current.data;
  }

  public print(): void {
    if (!this.head) {
      console.log("Nothing here!");
      return;
    }

    if (!this.head.next) {
      console.log(this.head.data);
      return;
    }

    let current = this.head;

    while (current.next) {
      console.log(current.data);
      current = current.next;
    }

    console.log(current.data);
  }

  public getSize(): number {
    return this.size;
  }
}

const queue = new Queue<number>();

queue.add(4);
queue.add(1);
queue.add(8);
queue.add(5);

queue.remove();
queue.remove();
queue.remove();

console.log(queue.peek());

queue.print();
