class ClassNode<T> {
  public next: ClassNode<T> | null;
  public data: T;

  constructor(data: T, next: ClassNode<T> | null) {
    this.data = data;
    this.next = next;
  }
}

export { ClassNode };
