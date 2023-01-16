const LinkedList = require("./linkedLists");

const ll = new LinkedList();
// 1. Test for prepending value to list
ll.prepend(10);
ll.prepend(20);
ll.prepend(30);
// output: 30 -> 20 -> 10 -> 50 -> null

// 2. Test for appending value to list
ll.append(50);

// output: 30 -> 20 -> 10 -> 50 -> null

// 3. Return total number of nodes
ll.listSize();
// output: Total number of nodes: 4

// 4. Return first node in list
ll.firstNode();
// output: First node in list is: 30

// 5. Return last node in the list
ll.tail();
// output: Last node in the list is: 50

// 6. Return node at index value
// Return error if index is out of range
ll.getAt(2);
// output: Node at index 2 is the value: 10
ll.getAt(-1);
// output: error if index is out of range

// 7. Remove last element from list
// ll.pop();

// 8. Check if value exists in list
ll.contains(10);
// output: true

// 9. Returns the index of the node containing value, or null if not found.
ll.find(30);
// output: 0

// 10. Print values in linkedlist in a string format
ll.toString();
// output:
// 30 -> 20 -> 10 -> 50 -> null

// EXTRA Credit
// 1. Insert a value at a given index
ll.insertAt(120, 1);
ll.toString();
// output: 30 -> 120 -> 20 -> 10 -> 50 -> null

// 2. Remove node at given index
ll.removeAt(2);
ll.toString();
// output: 30 -> 120 -> 10 -> 50 -> null
