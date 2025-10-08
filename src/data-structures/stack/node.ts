class ClassNode<T> {
  public data: T;
  public prev: ClassNode<T> | null;

  constructor(data: T, prev: ClassNode<T> | null) {
    this.data = data;
    this.prev = prev;
  }
}

export { ClassNode };
