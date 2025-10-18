// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function insertAfterTarget(stack, target, newElement) {
  // your code here
  const tempStack = new Stack()
  let inserted = false

  while(!stack.isEmpty()){
    const item = stack.pop()
    tempStack.push(item)

    if(item === target && !inserted){
      tempStack.push(newElement)
      inserted = true
    }
  }

  while(!tempStack.isEmpty()){
    stack.push(tempStack.pop())
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget(stack, "B", "X");
console.log(stack.printStack()); // A B X C D