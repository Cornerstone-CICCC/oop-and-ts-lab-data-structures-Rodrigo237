// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(stack, a, b) {
  // your code here
  const tempStack = new Stack()
  let foundA = false
  let foundB = false

  while(!stack.isEmpty()){
    const item = stack.pop()

    if(item === a || item === b){
      tempStack.push(item)
      if(item === a){
        foundA = a
      }
      if(item === b){
        foundB = b
      }else{
        tempStack.push(item)
      }

    }
  }

  while(!tempStack.isEmpty()){
    stack.push(tempStack.pop())
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween(fruits, "Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry