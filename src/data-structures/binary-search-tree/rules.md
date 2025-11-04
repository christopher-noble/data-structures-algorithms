# Binary Search Tree Rules

- All nodes in the left subtree must have values less than the parent node
- All nodes in the right subtree must have values greater than the parent node
- This rule applies recursively to all nodes in the tree
- Each node can have at most two child nodes (binary property)
- A node can have zero, one, or two children
- Each node contains exactly one key/value
- No two nodes can have the same value (if handling duplicates, they must be handled according to a specific policy)

- New nodes are always inserted as leaf nodes
- If the new value is less than the current node, traverse left
- If the new value is greater than the current node, traverse right
- Continue traversing until an empty position is found

- Average case time complexity for search, insert, delete: O(log n)
- Worst case (unbalanced tree): O(n)
- Space complexity: O(n)
