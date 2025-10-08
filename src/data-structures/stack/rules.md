# Stack

A stack is a fundamental data structure with a very simple and strict set of rules. It operates on the last-in, first-out principle.

## Rules

LIFO (Last-In, First-Out): This is the most important rule. The last element added to the stack is always the first one to be removed. Think of a stack of plates—you can only add or remove plates from the top.

Limited Operations: Stacks have a constrained set of actions you can perform on them:

Push: To add a new element, you can only push it onto the top of the stack.

Pop: To remove an element, you can only pop the one currently at the very top.

Peek or Top: You can look at the element at the top of the stack without removing it.

isEmpty: You can check if the stack is empty.

No Random Access: You cannot access or modify elements in the middle of a stack. For example, there's no way to get the third element from the bottom without first popping the elements on top of it.

Fixed-Size (in some implementations): Depending on the implementation (like using a fixed-size array), a stack may have a maximum number of elements. Adding an element to a full stack results in an "overflow."
