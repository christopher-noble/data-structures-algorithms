# Linked List

A linked list is a linear data structure where elements are not stored at contiguous memory locations. Instead, each element is a separate object, called a node, that contains data and a reference to the next node in the sequence.

## Rules

Non-Contiguous Memory: Unlike arrays, linked list nodes can be stored anywhere in memory. They don't occupy a single, continuous block of memory.

Nodes: A linked list is made up of a sequence of nodes. Each node has two parts:

- Data: The value stored in the node.

- Pointer/Reference: A reference to the next node in the sequence.

Head: The first node of the linked list is called the head. It's the starting point for all list traversals. If the list is empty, the head is typically null.

Traversing: To access an element, you must start at the head and follow the next pointers sequentially until you reach the desired node. You cannot randomly access an element by its index, which is a key difference from an array.

Dynamic Size: Linked lists can grow or shrink in size as needed. Adding or removing elements is highly efficient because it only involves changing a few pointers, not shifting all the elements like in an array.

Memory Overhead: Each node requires extra memory to store the pointer to the next node, which is a slight disadvantage compared to the compact memory usage of an array.

### Key Operations & Their Rules

Adding (Insertion): To add a new node, you simply update the next pointer of the node that will precede it, and the next pointer of the new node itself. This operation is very fast, often taking O(1) time if you already have a reference to the preceding node.

Removing (Deletion): To remove a node, you update the next pointer of the preceding node to point to the node after the one being removed, effectively "skipping" the target node. Like insertion, this is also a fast, constant-time operation if you have a reference to the preceding node.

Searching: To find a specific value, you must traverse the list from the head, checking each node's data. In the worst case, you may have to visit every node, resulting in a time complexity of O(n), where n is the number of nodes.
