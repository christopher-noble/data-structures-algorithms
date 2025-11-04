class ClassNode<T> {
  public data: T;
  public right: ClassNode<T> | null;
  public left: ClassNode<T> | null;

  constructor(data: T, left: ClassNode<T> | null, right: ClassNode<T> | null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export { ClassNode };
