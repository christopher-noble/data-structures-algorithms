import { ClassNode } from "./node";

class LinkedList<T> {
  private head: ClassNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  public getSize(): number {
    return this.size;
  }

  public add(value: T): void {
    const node = new ClassNode(value, null);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  public remove(value: T): boolean {
    if (!this.head) {
      return false;
    } else {
      if (this.head.data === value) {
        this.head = this.head.next;
        this.size--;
        return true;
      }

      let current = this.head;

      while (current.next && current.next.data !== value) {
        current = current.next;
      }

      if (current.next) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
    }

    return false;
  }

  public find(value: T): T | null {
    if (!this.head) {
      return null;
    }

    if (this.head.data === value) {
      console.log(this.head.data);
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === value) {
        return current.next.data;
      }

      current = current.next;
    }

    return null;
  }

  public print(): void {
    if (!this.head) {
      console.log("Nothin here!");
      return;
    }

    let current = this.head;
    current.data;

    while (current.next) {
      current = current.next;
      console.log(current.data);
    }

    return;
  }
}

const linkedList = new LinkedList();

linkedList.add(5);
linkedList.add(4);
linkedList.add(3);

linkedList.print();

export { LinkedList };
