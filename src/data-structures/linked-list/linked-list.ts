import { ClassNode } from "./node";

class LinkedList<T> {
  private head: ClassNode<T> | null;
  private size: number;

  public getSize(): void {
    console.log(this.size);
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

  public find(value: T): void {
    if (!this.head) {
      console.log(null);
      return;
    }

    if (this.head.data === value) {
      console.log(this.head.data);
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === value) {
        console.log(current.next.data);
      }

      current = current.next;
    }

    return;
  }

  public print(): void {
    if (!this.head) {
      console.log("Nothin here!");
      return;
    }

    let current = this.head;
    console.log(current.data);

    while (current.next) {
      current = current.next;
      console.log(current.data);
    }
  }
}

const linkedList = new LinkedList<number>();

linkedList.add(5);
linkedList.add(4);
linkedList.add(3);

linkedList.remove(4);
linkedList.find(3);

linkedList.print();

export { LinkedList };
