class ClassNode<T> {
  public data: T;
  public next: ClassNode<T> | null;

  constructor(data: T) {
    this.next = null;
    this.data = data;
  }
}

export { ClassNode };
