class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = newNode;
    }
    this.length++;
  }

  listSize() {
    let current = this.head;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }
    console.log("----");
    console.log(`Total number of nodes: ${count}`);
    return count;
  }

  firstNode() {
    console.log("----");
    console.log(`First node in list is: ${this.head.value}`);
    return this.head.value;
  }

  tail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    console.log("----");
    console.log(`Last node in the list is: ${current.value}`);
    return current.value;
  }

  getAt(index) {
    let count = 0;
    let current = this.head;

    while (current) {
      if (count === index) {
        console.log("----");
        console.log(`Node at index ${index} is the value: ${current.value}`);
        return current;
      }
      count++;
      current = current.next;
    }
    console.log(`Error: Index value is out of range`);
    return null;
  }

  pop() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        console.log("----");
        console.log(true);
        return true;
      }
      current = current.next;
    }
    console.log("----");
    console.log(false);
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        console.log("----");
        console.log(index);
        return index;
      }
      current = current.next;
      index++;
    }
    console.log("----");
    console.log(null);
    return null;
  }

  toString() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log("----");
    console.log(`${output}null`);
  }

  insertAt(value, index) {
    if (!this.head || index < 0) {
      console.log("Error: Linked list is empty or index out of range");
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++)
      if (!(current = current.next)) {
        console.log("Error: Index out of range");
        return;
      }
    let newNode = { value: value, next: current.next };
    current.next = newNode;
  }

  removeAt(index) {
    if (!this.head || index < 0 || index >= this.length) {
      console.log("Error: Linked list is empty or index out of range");
      return;
    }
    let currentNode = this.head;
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
    }
    this.length--;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
